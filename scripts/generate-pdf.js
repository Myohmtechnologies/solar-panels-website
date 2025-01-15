const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');

const content = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Guide des Aides et Subventions pour Panneaux Solaires 2024</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 210mm;
            margin: 0 auto;
            padding: 20mm;
        }
        h1 {
            color: #AFC97E;
            text-align: center;
            font-size: 24px;
            margin-bottom: 30px;
        }
        h2 {
            color: #AFC97E;
            font-size: 20px;
            margin-top: 40px;
        }
        h3 {
            color: #333;
            font-size: 18px;
        }
        .highlight {
            background-color: #FFDF64;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
        }
        .section {
            margin-bottom: 30px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        th {
            background-color: #AFC97E;
            color: white;
        }
        .box {
            border: 2px solid #AFC97E;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <h1>Guide des Aides et Subventions pour Panneaux Solaires 2024</h1>

    <div class="section">
        <h2>MyOhm Technologies : Votre Partenaire en Transition Énergétique</h2>
        
        <div class="box">
            <h3>Notre Histoire</h3>
            <p>MyOhm Technologies est née d'une vision simple mais ambitieuse : rendre l'énergie solaire accessible à tous les foyers français. Fondée par des experts passionnés de l'énergie renouvelable, notre entreprise s'est rapidement imposée comme un acteur majeur de la transition énergétique dans la région PACA.</p>
        </div>

        <h3>Notre Équipe</h3>
        <ul>
            <li>Des ingénieurs spécialisés en énergie solaire</li>
            <li>Des techniciens certifiés QualiPV</li>
            <li>Des conseillers en financement experts des aides de l'État</li>
            <li>Des installateurs expérimentés et formés aux dernières technologies</li>
        </ul>

        <div class="box">
            <h3>Notre Showroom</h3>
            <p>Situé au cœur de la région PACA, notre showroom est un espace unique dédié à l'énergie solaire :</p>
            <ul>
                <li>Exposition de panneaux solaires dernière génération</li>
                <li>Démonstrations en temps réel de production d'énergie</li>
                <li>Espace conseil personnalisé</li>
                <li>Simulateurs de rendement énergétique</li>
            </ul>
        </div>
    </div>

    <div class="section">
        <h2>Les Enjeux de la Transition Énergétique</h2>
        
        <h3>Pourquoi Passer à l'Énergie Solaire ?</h3>
        
        <div class="highlight">
            <h4>1. Enjeux Environnementaux</h4>
            <ul>
                <li>Réduction significative des émissions de CO2</li>
                <li>Participation active à la lutte contre le réchauffement climatique</li>
                <li>Énergie propre et renouvelable</li>
            </ul>
        </div>

        <div class="highlight">
            <h4>2. Enjeux Économiques</h4>
            <ul>
                <li>Indépendance énergétique face à la hausse des prix de l'électricité</li>
                <li>Retour sur investissement rapide (5-8 ans en moyenne)</li>
                <li>Valorisation de votre patrimoine immobilier</li>
            </ul>
        </div>
    </div>

    <div class="section">
        <h2>Guide des Aides et Subventions 2024</h2>

        <div class="box">
            <h3>MaPrimeRénov'</h3>
            <table>
                <tr>
                    <th>Profil</th>
                    <th>Montant</th>
                </tr>
                <tr>
                    <td>Ménages très modestes</td>
                    <td>Jusqu'à 4000€</td>
                </tr>
                <tr>
                    <td>Ménages modestes</td>
                    <td>Jusqu'à 3000€</td>
                </tr>
                <tr>
                    <td>Ménages intermédiaires</td>
                    <td>Jusqu'à 2000€</td>
                </tr>
            </table>
        </div>

        <div class="box">
            <h3>Certificats d'Économies d'Énergie (CEE)</h3>
            <p>Prime versée par les fournisseurs d'énergie :</p>
            <ul>
                <li>Entre 2000€ et 4000€ selon la puissance installée</li>
                <li>Cumulable avec MaPrimeRénov'</li>
                <li>Bonus pour les ménages en précarité énergétique</li>
            </ul>
        </div>

        <div class="highlight">
            <h3>Exemple de Financement</h3>
            <p>Pour une installation type de 6kWc :</p>
            <table>
                <tr>
                    <td>Coût initial</td>
                    <td>15 000€</td>
                </tr>
                <tr>
                    <td>MaPrimeRénov'</td>
                    <td>-3 000€</td>
                </tr>
                <tr>
                    <td>CEE</td>
                    <td>-2 500€</td>
                </tr>
                <tr>
                    <td>TVA réduite</td>
                    <td>-1 500€</td>
                </tr>
                <tr>
                    <td>Aide régionale</td>
                    <td>-1 000€</td>
                </tr>
                <tr>
                    <th>Reste à charge</th>
                    <th>7 000€</th>
                </tr>
            </table>
        </div>
    </div>

    <div class="section">
        <h2>Comment Bénéficier de Ces Aides ?</h2>
        <ol>
            <li>Contactez MyOhm Technologies pour une étude gratuite</li>
            <li>Nous réalisons votre simulation personnalisée</li>
            <li>Nous montons vos dossiers de subventions</li>
            <li>Installation et mise en service</li>
            <li>Suivi de production</li>
        </ol>

        <div class="box">
            <h3>Contactez-nous</h3>
            <p>Transformez votre projet en réalité :</p>
            <ul>
                <li>Email : contact@myohmtechnologies.com</li>
                <li>Site web : www.myohmtechnologies.com</li>
            </ul>
        </div>
    </div>
</body>
</html>
`;

async function generatePDF() {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        // Set content
        await page.setContent(content);
        
        // Generate PDF
        await page.pdf({
            path: path.join(__dirname, '../public/guides/aides-subventions-2024.pdf'),
            format: 'A4',
            printBackground: true,
            margin: {
                top: '20mm',
                right: '20mm',
                bottom: '20mm',
                left: '20mm'
            }
        });

        await browser.close();
        console.log('PDF generated successfully!');
    } catch (error) {
        console.error('Error generating PDF:', error);
    }
}

generatePDF();
