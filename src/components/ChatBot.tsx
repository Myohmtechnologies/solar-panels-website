"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { trackEvent } from '@/utils/analytics';

interface Message {
    text: string;
    type: 'bot' | 'user' | 'system';
    showAvatar?: boolean;
}

interface Question {
    id: number;
    text: string;
    options?: string[];
    showAvatar?: boolean;
    inputType?: 'text' | 'number' | 'form';
    formFields?: { type: string; placeholder: string; name: string; }[];
}

const questions: Question[] = [
   
    {
        id: 1,
        text: "Bonjour, Vous envisagez de réaliser des travaux chez vous pour économiser sur vos factures d'énergie ? Vous êtes au bon endroit !",
        options: ["Une maison individuelle", "Un appartement"],
        showAvatar: true
    },
    {
        id: 2,
        text: "Quel est le montant mensuel de votre facture d'électricité ?",
        options: ["Entre 70€ et 160€", "Entre 160€ et 250€", "Entre 250€ et 500€"],
        showAvatar: true
    },
    {
        id: 3,
        text: "Pour finaliser votre demande et vous recontacter, merci de nous laisser vos coordonnées :",
        inputType: 'form',
        showAvatar: true,
        formFields: [
            { type: 'text', placeholder: 'Nom complet', name: 'fullName' },
            { type: 'email', placeholder: 'Email', name: 'email' },
            { type: 'tel', placeholder: 'Numéro de téléphone', name: 'phone' }
        ]
    }
];

const TYPING_DELAY = 1500; // Temps d'affichage des points de suspension
const INITIAL_DELAY = 1000; // Délai avant le premier message

export default function ChatBot() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userResponses, setUserResponses] = useState<Record<number, string>>({});
    const [formData, setFormData] = useState({ 
        fullName: '', 
        email: '', 
        phone: ''
    });
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [shouldPulse, setShouldPulse] = useState(true);
    const [hasJoined, setHasJoined] = useState(false);
    const [waitingForResponse, setWaitingForResponse] = useState(false);
    const [showChatButton, setShowChatButton] = useState(false);
    const startTime = useRef(Date.now());
    const lastMessageRef = useRef<HTMLDivElement>(null);

    // Fonction utilitaire pour le tracking
    const trackChatbotEvent = (action: string, data: any = {}) => {
        trackEvent('chatbot_interaction', {
            action,
            question_id: currentQuestion,
            ...data,
            timestamp: new Date().toISOString()
        });
    };

    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);

        setIsOpen(false);

        // Gestion du scroll pour mobile
        const handleScroll = () => {
            if (isMobile) {
                const heroSection = document.querySelector('.hero-section');
                if (heroSection) {
                    const heroBottom = heroSection.getBoundingClientRect().bottom;
                    setShowChatButton(heroBottom < 0);
                }
            } else {
                setShowChatButton(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Vérification initiale

        // Animation de pulse sur mobile
        if (isMobile) {
            const pulseInterval = setInterval(() => {
                setShouldPulse(prev => !prev);
            }, 1500);

            return () => {
                clearInterval(pulseInterval);
                window.removeEventListener('resize', checkMobile);
                window.removeEventListener('scroll', handleScroll);
            };
        }

        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMobile]);

    useEffect(() => {
        if (isOpen && !hasJoined) {
            trackChatbotEvent('start_conversation');
            setMessages([{ 
                text: "Rudy vient de rejoindre la conversation", 
                type: 'system',
                showAvatar: false 
            }]);
            setHasJoined(true);

            setTimeout(() => {
                showNextMessage(questions[0].text).then(() => {
                    setCurrentQuestion(1);
                });
            }, INITIAL_DELAY);
        }
    }, [isOpen, hasJoined]);

    const showNextMessage = (message: string, showAvatar: boolean = true) => {
        setIsTyping(true);
        setWaitingForResponse(false);
        
        const scrollToBottom = () => {
            const chatContainer = document.querySelector('.chat-messages');
            if (chatContainer) {
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }
        };
        scrollToBottom();
        
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                setIsTyping(false);
                setMessages(prev => [...prev, { text: message, type: 'bot', showAvatar }]);
                setTimeout(() => {
                    scrollToBottom();
                    const currentQ = questions[currentQuestion];
                    if (currentQ && (currentQ.options || currentQ.inputType)) {
                        setWaitingForResponse(true);
                    }
                    resolve();
                }, 100);
            }, TYPING_DELAY);
        });
    };

    const handleSubmit = (response: string) => {
        if (!response.trim() || isTyping) return;
        
        // Track la réponse de l'utilisateur
        trackChatbotEvent('user_response', {
            response,
            time_spent: Date.now() - startTime.current
        });

        setMessages(prev => [...prev, { text: response, type: 'user' }]);
        setUserResponses(prev => ({ ...prev, [currentQuestion]: response }));
        setWaitingForResponse(false);

        setTimeout(() => {
            const nextQuestion = questions[currentQuestion];
            if (nextQuestion) {
                showNextMessage(nextQuestion.text).then(() => {
                    setCurrentQuestion(prev => prev + 1);
                    if (nextQuestion.options || nextQuestion.inputType) {
                        setWaitingForResponse(true);
                    }
                });
            }
        }, 500);
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formMessage = `Nom: ${formData.fullName}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}`;
        
        // Track la soumission du formulaire
        trackChatbotEvent('form_submit', {
            type_logement: userResponses[1],
            montant_facture: userResponses[2],
            time_spent: Date.now() - startTime.current
        });

        handleSubmit(formMessage);

        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    city: 'À compléter',
                    projectType: 'SOLAR_PANELS',
                    source: 'CHATBOT',
                    notes: `Type de logement: ${userResponses[1]}\nMontant facture: ${userResponses[2]}`,
                }),
            });

            if (!response.ok) {
                throw new Error('Erreur lors de l\'enregistrement');
            }

            setTimeout(() => {
                showNextMessage("Merci pour votre demande ! Un conseiller My ohm va vous recontacter très prochainement pour étudier votre projet en détail. À bientôt !");
                trackChatbotEvent('conversation_complete', {
                    success: true
                });
                setTimeout(() => {
                    setIsOpen(false);
                }, 5000);
            }, 1000);

        } catch (error) {
            console.error('Erreur:', error);
            trackChatbotEvent('form_error', {
                error: error.message
            });
            setTimeout(() => {
                showNextMessage("Désolé, une erreur est survenue lors de l'enregistrement. Veuillez réessayer plus tard.");
            }, 1000);
        }
    };

    if (!isOpen) {
        return showChatButton ? (
            <button 
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-4 right-4 w-16 h-16 bg-gradient-solar rounded-full shadow-lg flex items-center justify-center transition-all duration-500 z-50 ${
                    shouldPulse ? 'scale-110' : 'scale-100'
                } hover:scale-110`}
            >
                <div className="relative">
                    <div className="absolute -top-2 -left-3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce shadow-lg">
                        1
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                </div>
            </button>
        ) : null;
    }

    return (
        <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col z-50">
            <div className="p-4 border-b border-e3e9f0 bg-gradient-solar flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Image
                        src="/images/team/rudy.jpg"
                        alt="Conseiller Rudy"
                        width={40}
                        height={40}
                        className="rounded-full border-2 border-white"
                    />
                    <div>
                        <h3 className="font-semibold text-232323">Rudy</h3>
                        <p className="text-xs text-232323">Conseiller My Ohm</p>
                    </div>
                </div>
                <button
                    onClick={() => setIsOpen(false)}
                    className="text-232323 hover:text-666666 transition-colors"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-contact chat-messages">
                <div className="flex flex-col space-y-4">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} space-x-2`}
                            ref={index === messages.length - 1 ? lastMessageRef : null}
                        >
                            {message.type === 'bot' && message.showAvatar && (
                                <div className="flex-shrink-0">
                                    <Image
                                        src="/images/team/rudy.jpg"
                                        alt="Conseiller Rudy"
                                        width={40}
                                        height={40}
                                        className="rounded-full border-2 border-white shadow-md"
                                    />
                                </div>
                            )}
                            <div
                                className={`max-w-[80%] p-3 rounded-lg text-sm ${
                                    message.type === 'user'
                                        ? 'bg-gradient-solar text-232323 rounded-br-none'
                                        : message.type === 'system'
                                        ? 'bg-gray-100 text-gray-600 text-center w-full'
                                        : 'bg-white text-232323 rounded-bl-none shadow-md'
                                }`}
                            >
                                {message.text.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        {i < message.text.split('\n').length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex space-x-2">
                            <div className="flex-shrink-0">
                                <Image
                                    src="/images/team/rudy.jpg"
                                    alt="Conseiller Rudy"
                                    width={40}
                                    height={40}
                                    className="rounded-full border-2 border-white shadow-md"
                                />
                            </div>
                            <div className="max-w-[80%] p-3 rounded-lg bg-white text-232323 rounded-bl-none shadow-md text-sm">
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* Espace supplémentaire en bas des messages */}
                <div className="h-4"></div>
            </div>

            <div className="p-4 border-t border-e3e9f0 bg-white mt-auto">
                {!isTyping && waitingForResponse && questions[currentQuestion - 1] && (
                    <>
                        {questions[currentQuestion - 1].options && (
                            <div className="grid grid-cols-1 gap-2">
                                {questions[currentQuestion - 1].options?.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleSubmit(option)}
                                        className="p-2 text-sm bg-f2f6fa hover:bg-gradient-solar transition-colors duration-200 rounded-lg text-232323 font-medium"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                        {questions[currentQuestion - 1].inputType === 'number' && (
                            <div className="flex space-x-2">
                                <input
                                    type="number"
                                    className="flex-1 p-2 border border-e3e9f0 rounded-lg focus:outline-none focus:border-ffb700 bg-f2f6fa text-232323"
                                    placeholder="Surface en m²"
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e.currentTarget.value)}
                                />
                                <button
                                    onClick={() => handleSubmit(inputValue)}
                                    className="px-4 py-2 bg-gradient-solar text-232323 rounded-lg hover:opacity-90 transition-opacity font-medium"
                                >
                                    Envoyer
                                </button>
                            </div>
                        )}
                        {questions[currentQuestion - 1].inputType === 'form' && (
                            <form onSubmit={handleFormSubmit} className="space-y-2">
                                {questions[currentQuestion - 1].formFields?.map((field, index) => (
                                    <input
                                        key={index}
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        className="w-full p-2 border border-e3e9f0 rounded-lg focus:outline-none focus:border-ffb700 bg-f2f6fa text-232323"
                                        onChange={(e) => setFormData(prev => ({ ...prev, [field.name]: e.target.value }))}
                                        required
                                    />
                                ))}
                                <button
                                    type="submit"
                                    className="w-full p-2 bg-gradient-solar text-232323 rounded-lg hover:opacity-90 transition-opacity font-medium"
                                >
                                    Envoyer
                                </button>
                            </form>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}