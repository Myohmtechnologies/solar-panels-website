const fs = require('fs');
const path = require('path');

// Importation des données des départements
const departmentFiles = [
  '04-alpes-de-haute-provence',
  '05-hautes-alpes',
  '06-alpes-maritimes',
  '13-bouches-du-rhone',
  '83-var',
  '84-vaucluse'
];

// Chemins des blogs à inclure dans le sitemap
const blogPaths = [
  '/blog/hc-pneus-partenaire-mobilite-durable',
  // Ajoutez ici d'autres chemins d'articles de blog
];

// Date du jour au format YYYY-MM-DD
const today = new Date().toISOString().split('T')[0];

// URLs de base du site
const baseUrl = 'https://www.myohmtechnologies.com';

// Fonction pour convertir un nom de ville en slug
const cityNameToSlug = (cityName) => {
  return cityName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
};

// Création du sitemap principal
const generateMainSitemap = () => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <!-- Page d'accueil -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <video:video>
      <video:thumbnail_loc>${baseUrl}/videos/thumbnail-home.jpg</video:thumbnail_loc>
      <video:title>Installation de panneaux solaires en PACA</video:title>
      <video:description>Découvrez comment MyOHM Technologies installe des panneaux solaires de haute qualité dans la région PACA.</video:description>
      <video:content_loc>${baseUrl}/videos/home-hero.mp4</video:content_loc>
      <video:duration>90</video:duration>
      <video:publication_date>${today}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:requires_subscription>no</video:requires_subscription>
      <video:live>no</video:live>
    </video:video>
  </url>

  <!-- Simulateur -->
  <url>
    <loc>${baseUrl}/simulateur</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Qui sommes-nous -->
  <url>
    <loc>${baseUrl}/qui-sommes-nous</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Réalisations -->
  <url>
    <loc>${baseUrl}/realisations</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Blog -->
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Contact -->
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Pages de départements -->
`;

  // Ajouter les pages de départements
  departmentFiles.forEach(deptFile => {
    const deptCode = deptFile.split('-')[0];
    const deptName = deptFile.split('-').slice(1).join('-');
    
    sitemap += `  <url>
    <loc>${baseUrl}/region/paca/departements/${deptFile}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <video:video>
      <video:thumbnail_loc>${baseUrl}/videos/thumbnails/${deptFile}.jpg</video:thumbnail_loc>
      <video:title>Installation de panneaux solaires dans le département ${deptFile}</video:title>
      <video:description>Découvrez notre expertise en installation de panneaux solaires dans le département ${deptFile} de la région PACA.</video:description>
      <video:content_loc>${baseUrl}/videos/departments/${deptFile}.mp4</video:content_loc>
      <video:duration>90</video:duration>
      <video:publication_date>${today}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
    </video:video>
  </url>
`;
  });

  sitemap += `</urlset>`;
  
  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
  console.log('Sitemap principal généré avec succès');
};

// Création des sitemaps par département
const generateDepartmentSitemaps = async () => {
  // Créer le répertoire des sitemaps s'il n'existe pas
  const sitemapsDir = path.join(__dirname, '../public/sitemaps');
  if (!fs.existsSync(sitemapsDir)) {
    fs.mkdirSync(sitemapsDir);
  }

  // Générer un sitemap pour chaque département
  for (const deptFile of departmentFiles) {
    try {
      // Simuler l'importation des données (dans un environnement Node.js réel, vous utiliseriez require)
      // Ici, nous allons lire le fichier et extraire les noms de villes
      const filePath = path.join(__dirname, `../src/app/data/departments/${deptFile}.ts`);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      
      // Extraire les noms de villes avec une expression régulière améliorée
      const cityMatches = fileContent.match(/([a-zA-Z0-9_-]+):\s*{\s*name:\s*"([^"]+)"/g);
      const cities = [];
      
      if (cityMatches) {
        cityMatches.forEach(match => {
          // Extraire la clé de la ville (le nom de la propriété)
          const cityKeyMatch = match.match(/([a-zA-Z0-9_-]+):\s*{/);
          if (cityKeyMatch && cityKeyMatch[1]) {
            const cityKey = cityKeyMatch[1];
            
            // Extraire le nom affiché de la ville
            const cityNameMatch = match.match(/name:\s*"([^"]+)"/);
            if (cityNameMatch && cityNameMatch[1]) {
              const cityName = cityNameMatch[1];
              
              // Vérifier que ce n'est pas "address" ou une valeur par défaut
              if (cityKey !== "address" && cityKey !== "default" && cityKey !== "example") {
                cities.push({ key: cityKey, name: cityName });
              }
            }
          }
        });
      }
      
      // Générer le sitemap pour ce département
      let deptSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
`;
      
      // Ajouter la page du département
      deptSitemap += `  <url>
    <loc>${baseUrl}/region/paca/departements/${deptFile}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <video:video>
      <video:thumbnail_loc>${baseUrl}/videos/thumbnails/${deptFile}.jpg</video:thumbnail_loc>
      <video:title>Installation de panneaux solaires dans le département ${deptFile}</video:title>
      <video:description>Découvrez notre expertise en installation de panneaux solaires dans le département ${deptFile} de la région PACA.</video:description>
      <video:content_loc>${baseUrl}/videos/departments/${deptFile}.mp4</video:content_loc>
      <video:duration>90</video:duration>
      <video:publication_date>${today}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
    </video:video>
  </url>
`;
      
      // Ajouter les pages de villes
      cities.forEach(city => {
        const citySlug = city.key; // Utiliser directement la clé comme slug
        deptSitemap += `  <url>
    <loc>${baseUrl}/region/paca/departements/${deptFile}/villes/${citySlug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <video:video>
      <video:thumbnail_loc>${baseUrl}/videos/thumbnails/cities/${citySlug}.jpg</video:thumbnail_loc>
      <video:title>Installation de panneaux solaires à ${city.name}</video:title>
      <video:description>Découvrez les avantages de l'installation de panneaux solaires à ${city.name} dans le département ${deptFile}.</video:description>
      <video:content_loc>${baseUrl}/videos/cities/${citySlug}.mp4</video:content_loc>
      <video:duration>90</video:duration>
      <video:publication_date>${today}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
    </video:video>
  </url>
`;
      });
      
      deptSitemap += `</urlset>`;
      
      // Écrire le sitemap du département
      fs.writeFileSync(path.join(sitemapsDir, `sitemap-${deptFile}.xml`), deptSitemap);
      console.log(`Sitemap pour ${deptFile} généré avec succès avec ${cities.length} villes`);
    } catch (error) {
      console.error(`Erreur lors de la génération du sitemap pour ${deptFile}:`, error);
    }
  }
};

// Création du sitemap pour les articles de blog
const generateBlogSitemap = () => {
  let blogSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <!-- Page principale du blog -->
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;

  // Ajouter les articles de blog individuels
  blogPaths.forEach(blogPath => {
    blogSitemap += `  <url>
    <loc>${baseUrl}${blogPath}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  });

  // Rechercher dynamiquement les articles de blog dans le répertoire
  try {
    const blogDir = path.join(__dirname, '../src/app/blog');
    const blogEntries = fs.readdirSync(blogDir, { withFileTypes: true });
    
    // Parcourir les entrées du répertoire blog
    blogEntries.forEach(entry => {
      if (entry.isDirectory() && entry.name !== '[slug]') {
        const blogSlug = entry.name;
        const blogUrl = `${baseUrl}/blog/${blogSlug}`;
        
        // Vérifier si ce blog n'est pas déjà dans la liste
        if (!blogPaths.includes(`/blog/${blogSlug}`)) {
          blogSitemap += `  <url>
    <loc>${blogUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
        }
      }
    });
  } catch (error) {
    console.error('Erreur lors de la recherche des articles de blog:', error);
  }

  blogSitemap += `</urlset>`;
  
  fs.writeFileSync(path.join(__dirname, '../public/sitemaps/sitemap-blog.xml'), blogSitemap);
  console.log('Sitemap pour les articles de blog généré avec succès');
};

// Création du sitemap index
const generateSitemapIndex = () => {
  let sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
`;

  // Ajouter les références aux sitemaps de départements
  departmentFiles.forEach(deptFile => {
    sitemapIndex += `  <sitemap>
    <loc>${baseUrl}/sitemaps/sitemap-${deptFile}.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
`;
  });

  // Ajouter la référence au sitemap du blog
  sitemapIndex += `  <sitemap>
    <loc>${baseUrl}/sitemaps/sitemap-blog.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
`;

  sitemapIndex += `</sitemapindex>`;
  
  fs.writeFileSync(path.join(__dirname, '../public/sitemap-index.xml'), sitemapIndex);
  console.log('Sitemap index généré avec succès');
};

// Exécution des fonctions de génération
const generateAllSitemaps = async () => {
  try {
    // Générer le sitemap principal
    generateMainSitemap();
    
    // Générer les sitemaps par département
    await generateDepartmentSitemaps();
    
    // Générer le sitemap du blog
    generateBlogSitemap();
    
    // Générer le sitemap index
    generateSitemapIndex();
    
    console.log('Tous les sitemaps ont été générés avec succès');
  } catch (error) {
    console.error('Erreur lors de la génération des sitemaps:', error);
  }
};

// Lancer la génération
generateAllSitemaps();
