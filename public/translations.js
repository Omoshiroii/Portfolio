/* Local translations: no network request, and the original English stays usable without JS. */
(() => {
  'use strict';
  const rows = [
    ['01 / WHAT I CAN CONTRIBUTE','01 / CE QUE JE PEUX APPORTER','01 / LO QUE PUEDO APORTAR'],
    ['Full-stack skills.','Compétences full-stack.','Competencias full-stack.'],['Practical experience.','Expérience concrète.','Experiencia práctica.'],
    ['Engineering student at EMSI, Tangier. Seeking a development internship or junior opportunity.','Élève ingénieur à l’EMSI, Tanger. À la recherche d’un stage en développement ou d’une opportunité junior.','Estudiante de ingeniería en EMSI, Tánger. Busco prácticas de desarrollo o una oportunidad junior.'],
    ['01 / WEB','01 / WEB','01 / WEB'],['02 / DASHBOARDS','02 / TABLEAUX DE BORD','02 / PANELES'],['03 / PYTHON','03 / PYTHON','03 / PYTHON'],
    ['Build web applications','Développer des applications web','Desarrollar aplicaciones web'],
    ['Client work · LILOOK storefront','Projet client · Boutique LILOOK','Proyecto para cliente · Tienda LILOOK'],
    ['Make complex tasks usable','Simplifier les tâches complexes','Simplificar tareas complejas'],
    ['Administration interfaces & databases','Interfaces d’administration et bases de données','Interfaces de administración y bases de datos'],
    ['Internship · Recruitment Engine','Stage · Recruitment Engine','Prácticas · Recruitment Engine'],
    ['Contribute to AI systems','Contribuer aux systèmes d’IA','Contribuir a sistemas de IA'],
    ['Team contribution · ADSUM','Contribution en équipe · ADSUM','Contribución en equipo · ADSUM'],
    ['Technologies','Technologies','Tecnologías'],['DOWNLOAD CV ↓','TÉLÉCHARGER LE CV ↓','DESCARGAR CV ↓'],
    ['DISCUSS AN OPPORTUNITY','DISCUTER D’UNE OPPORTUNITÉ','HABLAR DE UNA OPORTUNIDAD'],
    ['02 / SELECTED PROJECTS','02 / PROJETS SÉLECTIONNÉS','02 / PROYECTOS SELECCIONADOS'],
    ['Three projects. Real experience.','Trois projets. Une expérience concrète.','Tres proyectos. Experiencia real.'],
    ['Client work, an internship, and a team contribution.','Un projet client, un stage et une contribution en équipe.','Un proyecto para cliente, unas prácticas y una contribución en equipo.'],
    ['Featured projects','Projets sélectionnés','Proyectos destacados'],
    ['Swipe or use arrow keys to browse projects','Balayez ou utilisez les flèches pour parcourir les projets','Desliza o usa las flechas para explorar los proyectos'],
    ['Previous project','Projet précédent','Proyecto anterior'],['Next project','Projet suivant','Proyecto siguiente'],['Choose project','Choisir un projet','Elegir proyecto'],
    ['VIEW ALL PROJECTS','VOIR TOUS LES PROJETS','VER TODOS LOS PROYECTOS'],
    ['03 / EDUCATION & EXPERIENCE','03 / FORMATION ET EXPÉRIENCE','03 / FORMACIÓN Y EXPERIENCIA'],
    ['A foundation you can build on.','Des bases pour vos projets.','Una base para tus proyectos.'],
    ['Full-stack graduate. Engineering student. Experience with client and team projects.','Diplômé en full-stack. Élève ingénieur. Expérience de projets clients et en équipe.','Titulado en full-stack. Estudiante de ingeniería. Experiencia en proyectos para clientes y en equipo.'],
    ['LET’S TALK','ÉCHANGEONS','HABLEMOS'],['Experience','Expérience','Experiencia'],
    ['Full-stack diploma','Diplôme full-stack','Diploma full-stack'],['IT internship · SNOP FSD','Stage IT · SNOP FSD','Prácticas de TI · SNOP FSD'],
    ['Computer Engineering · EMSI','Ingénierie informatique · EMSI','Ingeniería informática · EMSI'],['Next opportunity','Prochaine opportunité','Próxima oportunidad'],
    ['Full-stack developer · Engineering student','Développeur full-stack · Élève ingénieur','Desarrollador full-stack · Estudiante de ingeniería'],
    ['Available for internships and junior opportunities.','Disponible pour un stage ou une opportunité junior.','Disponible para prácticas y oportunidades junior.'],
    ['Skills for','Des compétences pour','Competencias para'],['your next project.','vos projets.','tu próximo proyecto.'],['EXPLORE MY SKILLS','DÉCOUVRIR MES COMPÉTENCES','EXPLORAR MIS COMPETENCIAS'],
    ['Looking for a developer or an intern?','Vous cherchez un développeur ou un stagiaire ?','¿Buscas un desarrollador o un estudiante en prácticas?'],
    ['Let’s discuss where I can contribute.','Discutons de ce que je peux apporter.','Hablemos de lo que puedo aportar.'],
    ['← BACK TO PORTFOLIO','← RETOUR AU PORTFOLIO','← VOLVER AL PORTAFOLIO'],
    ['TAHA ZERRAD / PROJECT COLLECTION','TAHA ZERRAD / COLLECTION DE PROJETS','TAHA ZERRAD / COLECCIÓN DE PROYECTOS'],
    ['Explore the work.','Découvrez les projets.','Explora los proyectos.'],
    ['Filter by skill. Open a project for screenshots, my role, and source links.','Filtrez par compétence. Ouvrez un projet pour voir les captures, mon rôle et les liens du code.','Filtra por competencia. Abre un proyecto para ver capturas, mi labor y enlaces al código.'],
    ['CONTACT ME','ME CONTACTER','CONTACTARME'],
    ['INTERNSHIP / TEAM PROJECT','STAGE / PROJET EN ÉQUIPE','PRÁCTICAS / PROYECTO EN EQUIPO'],
    ['An internship application built with colleagues. My focus: the administration dashboard.','Une application de stage développée avec des collègues. Mon rôle : le tableau de bord d’administration.','Una aplicación de prácticas desarrollada con compañeros. Mi labor: el panel de administración.'],
    ['DASHBOARD / RECRUITMENT / TEAMWORK','TABLEAU DE BORD / RECRUTEMENT / ÉQUIPE','PANEL / RECLUTAMIENTO / EQUIPO'],
    ['Developed during my internship with a few colleagues. I worked on the dashboard, including the administration experience shown here: user management, reported users, job offers, and settings. The gallery also shows the shared application’s public pages and login screen.','Développée pendant mon stage avec quelques collègues. J’ai travaillé sur le tableau de bord et l’administration présentés ici : gestion des utilisateurs, signalements, offres d’emploi et paramètres. La galerie montre aussi les pages publiques et l’écran de connexion de l’application commune.','Desarrollada durante mis prácticas con varios compañeros. Trabajé en el panel y la administración que se muestran aquí: gestión de usuarios, reportes, ofertas de empleo y ajustes. La galería también muestra las páginas públicas y la pantalla de acceso de la aplicación compartida.'],
    ['Recruitment platform homepage','Page d’accueil de la plateforme de recrutement','Página de inicio de la plataforma de reclutamiento'],
    ['Dashboard · User management','Tableau de bord · Gestion des utilisateurs','Panel · Gestión de usuarios'],
    ['Dashboard · Reported users','Tableau de bord · Utilisateurs signalés','Panel · Usuarios reportados'],
    ['Dashboard · Job offers','Tableau de bord · Offres d’emploi','Panel · Ofertas de empleo'],
    ['Dashboard · Settings','Tableau de bord · Paramètres','Panel · Ajustes'],
    ['Team application · Homepage','Application commune · Accueil','Aplicación del equipo · Inicio'],
    ['Team application · About page','Application commune · À propos','Aplicación del equipo · Acerca de'],
    ['Team application · Login','Application commune · Connexion','Aplicación del equipo · Acceso'],
    ['Project screenshot gallery','Galerie de captures du projet','Galería de capturas del proyecto'],
    ['Swipe or use arrow keys to browse screenshots','Balayez ou utilisez les flèches pour parcourir les captures','Desliza o usa las flechas para ver las capturas'],
    ['Previous screenshot','Capture précédente','Captura anterior'],['Next screenshot','Capture suivante','Captura siguiente'],
    ['Choose screenshot','Choisir une capture','Elegir captura'],['OPEN FULL IMAGE','OUVRIR L’IMAGE','ABRIR IMAGEN COMPLETA'],
    ['ADSUM attendance command deck','Interface de gestion des présences ADSUM','Interfaz de gestión de asistencia ADSUM'],
    ['Campus des Nobles school management console','Console de gestion scolaire Campus des Nobles','Consola de gestión escolar Campus des Nobles'],
    ['Task Manager planner with task filters and progress','Planificateur Task Manager avec filtres et progression','Planificador Task Manager con filtros y progreso'],
    ['Library shelves — illustrative photograph','Rayonnages de bibliothèque — photographie d’illustration','Estanterías de biblioteca — fotografía ilustrativa'],
    ['Illustrative library photos:','Photographies d’illustration :','Fotografías ilustrativas de biblioteca:'],
    ['A jewelry shop for a client. An internship dashboard built with colleagues. The first small builds that made the fundamentals click. Each project has a story.','Une boutique de bijoux pour une cliente. Un tableau de bord de stage créé avec des collègues. Les premiers projets qui ont donné du sens aux bases. Chaque réalisation a son histoire.','Una tienda de joyas para una clienta. Un panel de prácticas creado con compañeros. Los primeros proyectos que dieron sentido a las bases. Cada proyecto tiene su historia.'],
    ['LILOOK · INTERNSHIP · FIRST BUILDS','LILOOK · STAGE · PREMIERS PROJETS','LILOOK · PRÁCTICAS · PRIMEROS PROYECTOS'],
    ['EXPLORE ALL PROJECTS','VOIR TOUS LES PROJETS','VER TODOS LOS PROYECTOS'],
    ['JEWELRY SHOP','BOUTIQUE DE BIJOUX','TIENDA DE JOYAS'],
    ['A jewelry storefront built for a client, from the collection to the shopping experience.','Une boutique de bijoux créée pour une cliente, de la collection à l’expérience d’achat.','Una tienda de joyas creada para una clienta, desde la colección hasta la experiencia de compra.'],
    ['LILOOK jewelry storefront with its collection and pink accents','La boutique de bijoux LILOOK, sa collection et ses accents roses','La tienda de joyas LILOOK con su colección y sus detalles rosas'],
    ['A full-stack jewelry catalogue and storefront. Explore the live experience or browse the source code.','Un catalogue et une boutique de bijoux full-stack. Découvrez le site ou explorez le code source.','Un catálogo y una tienda de joyas full-stack. Explora el sitio o consulta el código fuente.'],
    ['AI / ATTENDANCE','IA / PRÉSENCES','IA / ASISTENCIA'],
    ['Contributed to a real-time attendance system using facial recognition.','Contribution à un système de gestion des présences par reconnaissance faciale en temps réel.','Contribución a un sistema de asistencia mediante reconocimiento facial en tiempo real.'],
    ['My contribution included GPU-aware inference and a persistent worker with vectorized embedding matching, keeping AI processing separate from the interface.','Ma contribution comprend l’inférence adaptée au GPU et un thread persistant avec correspondance vectorisée des embeddings, séparant le traitement IA de l’interface.','Mi contribución incluye inferencia adaptada a la GPU y un proceso persistente con comparación vectorizada de embeddings, separando el procesamiento de IA de la interfaz.'],
    ['SCHOOL MANAGEMENT','GESTION SCOLAIRE','GESTIÓN ESCOLAR'],
    ['A school management system developed in C++.','Un système de gestion scolaire développé en C++.','Un sistema de gestión escolar desarrollado en C++.'],
    ['An application for school management, built as a C++ project. The repository contains the implementation.','Une application de gestion scolaire réalisée en C++. Le dépôt contient son implémentation.','Una aplicación de gestión escolar realizada en C++. El repositorio contiene la implementación.'],
    ['EVERYDAY TOOLS','OUTILS DU QUOTIDIEN','HERRAMIENTAS COTIDIANAS'],
    ['A personal task manager for organizing work and tracking progress.','Un gestionnaire de tâches personnel pour organiser le travail et suivre les progrès.','Un gestor de tareas personal para organizar el trabajo y seguir el progreso.'],
    ['A practical project to strengthen web development fundamentals while building a tool I can use myself.','Un projet pratique pour consolider mes bases en développement web et créer un outil que j’utilise au quotidien.','Un proyecto práctico para reforzar mis bases de desarrollo web y crear una herramienta que pueda utilizar.'],
    ['LARAVEL APPLICATION','APPLICATION LARAVEL','APLICACIÓN LARAVEL'],
    ['A library project built with Laravel.','Un projet de bibliothèque réalisé avec Laravel.','Un proyecto de biblioteca realizado con Laravel.'],
    ['A Laravel project focused on a library application. Source access depends on the repository’s visibility.','Un projet Laravel consacré à une application de bibliothèque. L’accès au code dépend de la visibilité du dépôt.','Un proyecto Laravel centrado en una aplicación de biblioteca. El acceso al código depende de la visibilidad del repositorio.'],
    ['COLLABORATIVE PROJECT','PROJET COLLABORATIF','PROYECTO COLABORATIVO'],
    ['A contribution to the shared projet-emploi project.','Une contribution au projet collaboratif projet-emploi.','Una contribución al proyecto compartido projet-emploi.'],
    ['A collaborative project to which I contributed. The linked repository belongs to the project team.','Un projet collaboratif auquel j’ai contribué. Le dépôt appartient à l’équipe du projet.','Un proyecto colaborativo al que contribuí. El repositorio pertenece al equipo del proyecto.'],
    ['TEAM PROJECT','PROJET EN ÉQUIPE','PROYECTO EN EQUIPO'],
    ['CONTRIBUTOR','CONTRIBUTEUR','COLABORADOR'],['CONTRIBUTIONS','CONTRIBUTIONS','COLABORACIONES'],
    ['C++ / SYSTEMS','C++ / SYSTÈMES','C++ / SISTEMAS'],
    ['REPOSITORY (ACCESS LIMITED)','DÉPÔT (ACCÈS LIMITÉ)','REPOSITORIO (ACCESO LIMITADO)'],
    ['GITHUB REPOSITORY','DÉPÔT GITHUB','REPOSITORIO GITHUB'],
    ['PROJECT PREVIEW','APERÇU DU PROJET','VISTA DEL PROYECTO'],['Images coming soon','Images à venir','Imágenes próximamente'],
    ['This repository is not publicly accessible at the moment.','Ce dépôt n’est pas accessible publiquement pour le moment.','Este repositorio no es accesible públicamente por el momento.'],
    ['Skip to the front page','Aller à la une','Ir a la portada'],
    ['THE INDEPENDENT PORTFOLIO OF TAHA ZERRAD','LE PORTFOLIO INDÉPENDANT DE TAHA ZERRAD','EL PORTAFOLIO INDEPENDIENTE DE TAHA ZERRAD'],
    ['DESIGNED AFTER DARK. BUILT WITH PURPOSE.','IMAGINÉ LA NUIT. CONSTRUIT AVEC SENS.','DISEÑADO DE NOCHE. CREADO CON PROPÓSITO.'],
    ['Choose language','Choisir la langue','Elegir idioma'],
    ['The Gotham Times front page','La une du Gotham Times','La portada de The Gotham Times'],
    ['THE PORTFOLIO EDITION','ÉDITION PORTFOLIO','EDICIÓN PORTAFOLIO'],
    ['GOTHAM CITY’S ONLY INDEPENDENT VOICE · EST. IN THE SHADOWS','LA SEULE VOIX INDÉPENDANTE DE GOTHAM · NÉE DANS L’OMBRE','LA ÚNICA VOZ INDEPENDIENTE DE GOTHAM · NACIDA EN LAS SOMBRAS'],
    ['TH','',''],['NOVEMBER','NOVEMBRE','NOVIEMBRE'],
    ['THE NIGHT IS DARKEST JUST BEFORE THE DAWN','LA NUIT EST LA PLUS SOMBRE JUSTE AVANT L’AUBE','LA NOCHE ES MÁS OSCURA JUSTO ANTES DEL AMANECER'],
    ['THE NIGHT IS DARKEST JUST BEFORE THE DAWN.','LA NUIT EST LA PLUS SOMBRE JUSTE AVANT L’AUBE.','LA NOCHE ES MÁS OSCURA JUSTO ANTES DEL AMANECER.'],
    ['VOL. 01 / NO. 028','VOL. 01 / N° 028','VOL. 01 / N.º 028'],
    ['THE TAHA ZERRAD PORTFOLIO EDITION','LE PORTFOLIO DE TAHA ZERRAD','EL PORTAFOLIO DE TAHA ZERRAD'],
    ['GOTHAM CITY · PRICE: ONE SLEEPLESS NIGHT','GOTHAM CITY · PRIX : UNE NUIT BLANCHE','GOTHAM CITY · PRECIO: UNA NOCHE EN VELA'],
    ['EXPLORE THE EDITION','EXPLORER L’ÉDITION','EXPLORAR LA EDICIÓN'],
    ['Main navigation','Navigation principale','Navegación principal'],
    ['Home','Accueil','Inicio'],['Projects','Projets','Proyectos'],['About me','À propos','Sobre mí'],['Skills','Compétences','Competencias'],['Contact','Contact','Contacto'],
    ['SPECIAL REPORT / A CITY ON THE EDGE','REPORTAGE SPÉCIAL / UNE VILLE SOUS TENSION','REPORTAJE ESPECIAL / UNA CIUDAD AL LÍMITE'],
    ['FEAR. OBSESSION. THE WILL TO BUILD.','PEUR. OBSESSION. L’ENVIE DE CONSTRUIRE.','MIEDO. OBSESIÓN. LAS GANAS DE CREAR.'],
    ['Taha Zerrad — The Gotham Times engineering portfolio','Taha Zerrad — Le portfolio d’ingénierie du Gotham Times','Taha Zerrad — El portafolio de ingeniería de The Gotham Times'],
    ['Engineering student. Building with purpose.','Élève ingénieur. Construire avec sens.','Estudiante de ingeniería. Crear con propósito.'],
    ['Software, data & a restless curiosity.','Logiciel, données et curiosité sans fin.','Software, datos y una curiosidad incansable.'],
    ['VIEW PROJECTS','VOIR LES PROJETS','VER PROYECTOS'],['GET IN TOUCH','ME CONTACTER','CONTACTAR'],
    ['WILL THE DARK KNIGHT RISE TONIGHT?','LE CHEVALIER NOIR SE LÈVERA-T-IL CE SOIR ?','¿SE ALZARÁ EL CABALLERO OSCURO ESTA NOCHE?'],
    ['Gotham Theater Joker poster','Affiche du Joker au théâtre de Gotham','Cartel del Joker en el teatro de Gotham'],
    ['ONE NIGHT ONLY','UNE SEULE SOIRÉE','UNA SOLA NOCHE'],['TONIGHT','CE SOIR','ESTA NOCHE'],['LIVE','DIRECT','EN VIVO'],
    ['A grainy portrait of the Joker','Un portrait granuleux du Joker','Un retrato granulado del Joker'],
    ['GOTHAM THEATER','THÉÂTRE DE GOTHAM','TEATRO DE GOTHAM'],
    ['NO RULES. NO REFUNDS. NO WAY OUT.','SANS RÈGLES. SANS REMBOURSEMENT. SANS ISSUE.','SIN REGLAS. SIN REEMBOLSOS. SIN SALIDA.'],
    ['A distressed newspaper photograph of Batman looking back over his shoulder in Gotham','Une photo de journal usée de Batman regardant derrière lui à Gotham','Una foto de periódico desgastada de Batman mirando hacia atrás en Gotham'],
    ['GOTHAM CITY / CRIME & CONSEQUENCE','GOTHAM CITY / CRIME ET CONSÉQUENCES','GOTHAM CITY / CRIMEN Y CONSECUENCIAS'],
    ['EXCLUSIVE PHOTOGRAPH · 01','PHOTOGRAPHIE EXCLUSIVE · 01','FOTOGRAFÍA EXCLUSIVA · 01'],['EVIDENCE','INDICES','PRUEBAS'],
    ['THE CITY SLEEPS. THE WORK DOESN’T.','LA VILLE DORT. LE TRAVAIL CONTINUE.','LA CIUDAD DUERME. EL TRABAJO CONTINÚA.'],
    ['PHOTOGRAPH FROM THE GOTHAM ARCHIVE','PHOTOGRAPHIE DES ARCHIVES DE GOTHAM','FOTOGRAFÍA DEL ARCHIVO DE GOTHAM'],
    ['WHY SO SERIOUS?','POURQUOI SI SÉRIEUX ?','¿POR QUÉ TAN SERIO?'],
    ['a little more chaos.','un peu plus de chaos.','un poco más de caos.'],
    ['BEHIND THE MASK / THE DEVELOPER','DERRIÈRE LE MASQUE / LE DÉVELOPPEUR','TRAS LA MÁSCARA / EL DESARROLLADOR'],
    ['Engineering student. Builder after dark.','Élève ingénieur. Créateur après la nuit tombée.','Estudiante de ingeniería. Creador al caer la noche.'],
    ['I’m Taha, an engineering student building a foundation in software while exploring AI, data and cloud. This is where the experiments, late nights, and lessons become projects.','Je suis Taha, élève ingénieur. Je consolide mes bases en logiciel tout en explorant l’IA, les données et le cloud. Ici, expériences, nuits blanches et apprentissages deviennent des projets.','Soy Taha, estudiante de ingeniería. Afianzo mis bases en software mientras exploro la IA, los datos y la nube. Aquí los experimentos, las noches en vela y el aprendizaje se convierten en proyectos.'],
    ['MORE ABOUT ME','EN SAVOIR PLUS','MÁS SOBRE MÍ'],['DISPATCH 01 / THE ORIGIN','CHRONIQUE 01 / LES ORIGINES','CRÓNICA 01 / EL ORIGEN'],
    ['No cape.','Pas de cape.','Sin capa.'],['Just conviction.','De la conviction.','Solo convicción.'],
    ['A foundation in full-stack development. A new chapter in Computer Engineering and Networks. I’m learning how to turn complex problems into software people can use.','Des bases en développement full-stack. Un nouveau chapitre en informatique et réseaux. J’apprends à transformer des problèmes complexes en logiciels utiles.','Una base en desarrollo full-stack. Un nuevo capítulo en informática y redes. Aprendo a convertir problemas complejos en software útil.'],
    ['READ MY STORY','LIRE MON PARCOURS','CONOCER MI HISTORIA'],['DISPATCH 02 / THE EVIDENCE','CHRONIQUE 02 / LES RÉALISATIONS','CRÓNICA 02 / LAS PRUEBAS'],
    ['The work leaves','Le travail laisse','El trabajo deja'],['a paper trail.','des traces.','huella.'],
    ['A cinema experience built with a team. Data experiments that uncover patterns. The first small builds that made the fundamentals click. Each project has a story.','Un site de cinéma créé en équipe. Des expériences pour comprendre les données. Les premiers projets qui ont donné du sens aux bases. Chaque réalisation a son histoire.','Una experiencia de cine creada en equipo. Experimentos para descubrir patrones en los datos. Los primeros proyectos que dieron sentido a las bases. Cada proyecto tiene su historia.'],
    ['CINEPHORIA · DATA · FIRST BUILDS','CINEPHORIA · DONNÉES · PREMIERS PROJETS','CINEPHORIA · DATOS · PRIMEROS PROYECTOS'],
    ['EXPLORE ALL 3 PROJECTS','VOIR LES 3 PROJETS','VER LOS 3 PROYECTOS'],
    ['“PUT A SMILE','« AFFICHE UN SOURIRE','«PON UNA SONRISA'],['ON THAT FACE.”','SUR CE VISAGE. »','EN ESA CARA».'],
    ['PERSONAL ADS / THE SIGNAL IS OPEN','PETITES ANNONCES / LE SIGNAL EST OUVERT','ANUNCIOS / LA SEÑAL ESTÁ ABIERTA'],
    ['Wanted: good ideas, difficult problems, and people who care about what they build.','Recherche : de bonnes idées, des défis et des personnes qui aiment ce qu’elles construisent.','Se buscan: buenas ideas, retos y personas que cuidan lo que crean.'],
    ['GOT A MISSION?','UNE MISSION ?','¿UNA MISIÓN?'],['SEND A SIGNAL','ENVOYER UN SIGNAL','ENVIAR UNA SEÑAL'],
    ['TURN THE PAGE ↓','TOURNER LA PAGE ↓','PASAR LA PÁGINA ↓'],
    ['LIVE FROM THE NIGHT SHIFT · TAHA ZERRAD','EN DIRECT DE LA NUIT · TAHA ZERRAD','EN DIRECTO DESDE LA NOCHE · TAHA ZERRAD'],
    ['PAUSE EFFECTS','PAUSER LES EFFETS','PAUSAR EFECTOS'],['RESUME EFFECTS','REPRENDRE LES EFFETS','REANUDAR EFECTOS'],
    ['THE STORY CONTINUES BELOW ↓','LA SUITE CI-DESSOUS ↓','LA HISTORIA SIGUE ABAJO ↓'],
    ['THE JOURNAL ENDS. THE JOURNEY BEGINS.','LE JOURNAL S’ACHÈVE. LE PARCOURS COMMENCE.','EL DIARIO TERMINA. EL CAMINO COMIENZA.'],
    ['Behind','Derrière','Tras'],['the mask.','le masque.','la máscara.'],
    ['I’m Taha. An engineering student in Tangier.','Je suis Taha. Élève ingénieur à Tanger.','Soy Taha. Estudiante de ingeniería en Tánger.'],
    ['Curious by nature. A builder by choice.','Curieux par nature. Créateur par choix.','Curioso por naturaleza. Creador por elección.'],
    ['EXPLORE MY WORK','DÉCOUVRIR MES PROJETS','EXPLORAR MI TRABAJO'],['TANGIER, MOROCCO / 35.76° N','TANGER, MAROC / 35,76° N','TÁNGER, MARRUECOS / 35,76° N'],
    ['MEET THE PERSON','FAIRE CONNAISSANCE','CONOCERME'],['Portfolio chapters','Chapitres du portfolio','Capítulos del portafolio'],
    ['Behind the mask','Derrière le masque','Tras la máscara'],['Milestones','Étapes clés','Hitos'],
    ['DOWNLOAD CV','TÉLÉCHARGER LE CV','DESCARGAR CV'],['01 / SELECTED WORK','01 / PROJETS CHOISIS','01 / PROYECTOS SELECCIONADOS'],
    ['Ideas, made real.','Des idées concrétisées.','Ideas hechas realidad.'],['A few builds from the journey so far.','Quelques réalisations au fil du parcours.','Algunos proyectos del camino recorrido.'],
    ['Filter projects','Filtrer les projets','Filtrar proyectos'],['ALL PROJECTS','TOUS LES PROJETS','TODOS LOS PROYECTOS'],['DATA','DONNÉES','DATOS'],
    ['View project: Cinephoria','Voir le projet : Cinephoria','Ver proyecto: Cinephoria'],
    ['Cinephoria cinema website with film listings','Site de cinéma Cinephoria avec sa programmation','Sitio de cine Cinephoria con su cartelera'],
    ['WEB DEVELOPMENT','DÉVELOPPEMENT WEB','DESARROLLO WEB'],
    ['Three weeks. One team. A cinema experience brought to life with code.','Trois semaines. Une équipe. Une expérience cinéma née du code.','Tres semanas. Un equipo. Una experiencia de cine hecha realidad con código.'],
    ['PROJECT DETAILS','DÉTAILS DU PROJET','DETALLES DEL PROYECTO'],
    ['View project: Making data speak.','Voir le projet : Faire parler les données.','Ver proyecto: Dar voz a los datos.'],
    ['PYTHON / DATA LAB','PYTHON / LABO DONNÉES','PYTHON / LABORATORIO DE DATOS'],['DATA IN MOTION.','LES DONNÉES EN MOUVEMENT.','DATOS EN MOVIMIENTO.'],
    ['VISUAL EXPLORATION','EXPLORATION VISUELLE','EXPLORACIÓN VISUAL'],['DATA EXPLORATION','EXPLORATION DES DONNÉES','EXPLORACIÓN DE DATOS'],
    ['Making data speak.','Faire parler les données.','Dar voz a los datos.'],
    ['Finding the story inside the numbers. An exploration of Python and visual analytics.','Trouver l’histoire derrière les chiffres. Une exploration de Python et de l’analyse visuelle.','Encontrar la historia detrás de los números. Una exploración de Python y del análisis visual.'],
    ['View project: Small build. Big start.','Voir le projet : Petit projet. Grand début.','Ver proyecto: Pequeño proyecto. Gran comienzo.'],
    ['Calculator project with number pad and a display','Projet de calculatrice avec pavé numérique et écran','Proyecto de calculadora con teclado numérico y pantalla'],
    ['THE FIRST CHAPTER','LE PREMIER CHAPITRE','EL PRIMER CAPÍTULO'],['Small build. Big start.','Petit projet. Grand début.','Pequeño proyecto. Gran comienzo.'],
    ['The humble calculator that turned curiosity into something I could actually use.','Une simple calculatrice qui a transformé ma curiosité en un outil concret.','Una sencilla calculadora que convirtió la curiosidad en algo útil.'],
    ['LIVE WEBSITE','VOIR LE SITE','VER SITIO WEB'],['GITHUB PROFILE','PROFIL GITHUB','PERFIL DE GITHUB'],
    ['3 stories in this edition','3 projets dans cette sélection','3 proyectos en esta selección'],
    ['2 stories in this edition','2 projets dans cette sélection','2 proyectos en esta selección'],
    ['1 story in this edition','1 projet dans cette sélection','1 proyecto en esta selección'],
    ['0 stories in this edition','0 projet dans cette sélection','0 proyectos en esta selección'],
    ['Portrait of Taha Zerrad','Portrait de Taha Zerrad','Retrato de Taha Zerrad'],['TAHA ZERRAD / TANGIER','TAHA ZERRAD / TANGER','TAHA ZERRAD / TÁNGER'],
    ['02 / BEHIND THE MASK','02 / DERRIÈRE LE MASQUE','02 / TRAS LA MÁSCARA'],['A person first.','L’humain avant tout.','Primero, una persona.'],['A builder, always.','Toujours prêt à créer.','Siempre, un creador.'],
    ['I like understanding how things work — then making something of my own. That curiosity took me from full-stack development to Computer Engineering and Networks at EMSI.','J’aime comprendre comment les choses fonctionnent, puis créer à mon tour. Cette curiosité m’a mené du développement full-stack à l’informatique et aux réseaux à l’EMSI.','Me gusta entender cómo funcionan las cosas y después crear algo propio. Esa curiosidad me llevó del desarrollo full-stack a estudiar informática y redes en EMSI.'],
    ['Outside the code, Gotham is my creative world. Inside it: patience, teamwork, and a habit of asking one more question.','Au-delà du code, Gotham est mon univers créatif. Dans le travail : de la patience, l’esprit d’équipe et l’habitude de toujours poser une question de plus.','Fuera del código, Gotham es mi mundo creativo. En el trabajo: paciencia, colaboración y la costumbre de hacer una pregunta más.'],
    ['BASED IN','BASÉ À','UBICACIÓN'],['Tangier, Morocco','Tanger, Maroc','Tánger, Marruecos'],['RIGHT NOW','ACTUELLEMENT','ACTUALMENTE'],
    ['Engineering student · EMSI','Élève ingénieur · EMSI','Estudiante de ingeniería · EMSI'],['EXPLORING','J’EXPLORE','EXPLORANDO'],['AI, data & cloud','IA, données et cloud','IA, datos y nube'],
    ['DOWNLOAD MY CV','TÉLÉCHARGER MON CV','DESCARGAR MI CV'],['PDF · Original French version','PDF · Version originale en français','PDF · Versión original en francés'],
    ['03 / THE MILESTONES','03 / LES ÉTAPES CLÉS','03 / LOS HITOS'],['Every chapter counts.','Chaque chapitre compte.','Cada capítulo cuenta.'],
    ['The foundations. The present. What comes next.','Les bases. Le présent. Et la suite.','Las bases. El presente. Lo que viene.'],
    ['THE STORY IS STILL BEING WRITTEN.','L’HISTOIRE CONTINUE DE S’ÉCRIRE.','LA HISTORIA SIGUE ESCRIBIÉNDOSE.'],
    ['2023 — 2025 / PAST','2023 — 2025 / PASSÉ','2023 — 2025 / PASADO'],['Learning to build.','Apprendre à construire.','Aprender a crear.'],
    ['Full-stack Web Development diploma at OFPPT–ISMO, Tétouan. The foundations of software, databases, and working as a team.','Diplôme en développement web full-stack à l’OFPPT–ISMO, Tétouan. Les bases du logiciel, des bases de données et du travail en équipe.','Diploma en desarrollo web full-stack en OFPPT–ISMO, Tetuán. Las bases del software, las bases de datos y el trabajo en equipo.'],
    ['APRIL 2025 / EXPERIENCE','AVRIL 2025 / EXPÉRIENCE','ABRIL 2025 / EXPERIENCIA'],['Code meets the real world.','Le code rencontre le terrain.','El código llega al mundo real.'],
    ['IT internship at SNOP FSD, Tangier. A Laravel application for manufacturing orders, alongside IT support and an introduction to network infrastructure.','Stage IT chez SNOP FSD, Tanger. Une application Laravel pour les ordres de fabrication, du support informatique et une initiation aux infrastructures réseau.','Prácticas de TI en SNOP FSD, Tánger. Una aplicación Laravel para órdenes de fabricación, soporte informático e introducción a la infraestructura de redes.'],
    ['2025 — PRESENT','2025 — AUJOURD’HUI','2025 — ACTUALIDAD'],['A wider perspective.','Élargir l’horizon.','Una perspectiva más amplia.'],
    ['Computer Engineering and Networks at EMSI, Tangier. Developing stronger engineering foundations while continuing to build practical projects.','Cycle d’ingénieur en informatique et réseaux à l’EMSI, Tanger. Consolider mes bases d’ingénierie tout en poursuivant des projets concrets.','Ingeniería informática y redes en EMSI, Tánger. Reforzar mis bases de ingeniería mientras sigo creando proyectos prácticos.'],
    ['NEXT / FUTURE','LA SUITE / AVENIR','LO PRÓXIMO / FUTURO'],['Keep going further.','Aller toujours plus loin.','Seguir avanzando.'],
    ['Explore AI, data engineering, and cloud systems. Find opportunities to learn with a team and turn useful ideas into working products.','Explorer l’IA, l’ingénierie des données et le cloud. Trouver des occasions d’apprendre en équipe et de transformer des idées utiles en produits concrets.','Explorar la IA, la ingeniería de datos y la nube. Encontrar oportunidades para aprender en equipo y convertir ideas útiles en productos reales.'],
    ['04 / THE TOOLKIT','04 / LES OUTILS','04 / LAS HERRAMIENTAS'],['Tools for the next idea.','Les outils de la prochaine idée.','Herramientas para la próxima idea.'],
    ['Development','Développement','Desarrollo'],['Web & databases','Web et bases de données','Web y bases de datos'],['Growing into','En cours d’exploration','En exploración'],
    ['Networks · AI · Data · Cloud','Réseaux · IA · Données · Cloud','Redes · IA · Datos · Nube'],
    ['The Joker in a monochrome Gotham portrait','Le Joker dans un portrait monochrome de Gotham','El Joker en un retrato monocromo de Gotham'],
    ['A little imagination.','Un peu d’imagination.','Un poco de imaginación.'],['A lot of persistence.','Beaucoup de persévérance.','Mucha perseverancia.'],
    ['05 / THE NEXT CHAPTER','05 / LE PROCHAIN CHAPITRE','05 / EL PRÓXIMO CAPÍTULO'],['Let’s build','Créons','Creemos'],['something.','quelque chose.','algo juntos.'],
    ['Have a project, an opportunity, or a question?','Un projet, une opportunité ou une question ?','¿Un proyecto, una oportunidad o una pregunta?'],
    ['I’d like to hear from you.','Au plaisir d’en discuter.','Me encantará escucharte.'],['SEND AN EMAIL','ENVOYER UN E-MAIL','ENVIAR UN CORREO'],
    ['Back to top','Retour en haut','Volver arriba'],['END OF THIS EDITION. NOT THE STORY.','FIN DE L’ÉDITION. PAS DE L’HISTOIRE.','FIN DE LA EDICIÓN. NO DE LA HISTORIA.'],
    ['CRAFTED WITH CURIOSITY & A LITTLE OBSESSION.','CRÉÉ AVEC CURIOSITÉ ET UN PEU D’OBSESSION.','CREADO CON CURIOSIDAD Y UN POCO DE OBSESIÓN.'],
    ['PROJECT /','PROJET /','PROYECTO /'],['PROJECT / 01','PROJET / 01','PROYECTO / 01'],['PROJECT / 02','PROJET / 02','PROYECTO / 02'],['PROJECT / 03','PROJET / 03','PROYECTO / 03'],['Close project details','Fermer les détails du projet','Cerrar detalles del proyecto'],
    ['A three-week team project combining a cinema interface, PHP, and MySQL. A lesson in communication as much as code.','Un projet en équipe de trois semaines associant une interface de cinéma, PHP et MySQL. Une leçon de communication autant que de code.','Un proyecto en equipo de tres semanas que combina una interfaz de cine, PHP y MySQL. Una lección de comunicación tanto como de código.'],
    ['A learning project exploring charts with Python, Pandas, and Plotly. The graphic shown is an illustration, not a product screenshot.','Un projet d’apprentissage des graphiques avec Python, Pandas et Plotly. Le visuel est une illustration, pas une capture du produit.','Un proyecto de aprendizaje sobre gráficos con Python, Pandas y Plotly. El visual es una ilustración, no una captura del producto.'],
    ['A first exploration of interfaces, user input, and JavaScript logic.','Une première exploration des interfaces, des saisies utilisateur et de la logique JavaScript.','Una primera exploración de interfaces, entradas de usuario y lógica JavaScript.'],
    ["Effects are paused by your device's reduced motion preference.",'Les effets sont suspendus selon les préférences d’animation de votre appareil.','Los efectos están pausados según la preferencia de movimiento reducido de tu dispositivo.'],
    ['Pause or resume the paper, lighting, bats and cinematic motion.','Suspendre ou reprendre les animations du papier, des lumières et des chauves-souris.','Pausar o reanudar las animaciones del papel, las luces y los murciélagos.']
  ];
  const byText = new Map();
  rows.forEach(row => row.forEach(text => { if(text) byText.set(text, row); }));
  const originals = new WeakMap();
  let language = 'en';
  let observer;
  const countPattern = /^(\d+) (?:stor(?:y|ies) in this edition|projets? dans cette sélection|proyectos? en esta selección)$/;
  const projectPattern = /^(?:PROJECT|PROJET|PROYECTO) \/ (\d+)$/;
  const labelPattern = /^(?:View project: |Voir le projet : |Ver proyecto: )(.+)$/;
  const known = text => byText.has(text.trim()) || countPattern.test(text.trim()) || projectPattern.test(text.trim()) || labelPattern.test(text.trim());
  const translate = (text) => {
    const count = text.trim().match(countPattern);
    if (count) {
      const n = Number(count[1]);
      return {en:`${n} ${n === 1 ? 'story' : 'stories'} in this edition`,fr:`${n} ${n === 1 ? 'projet' : 'projets'} dans cette sélection`,es:`${n} ${n === 1 ? 'proyecto' : 'proyectos'} en esta selección`}[language];
    }
    const project = text.trim().match(projectPattern);
    if (project) return {en:'PROJECT',fr:'PROJET',es:'PROYECTO'}[language] + ' / ' + project[1];
    const label = text.trim().match(labelPattern);
    if (label) return {en:'View project: ',fr:'Voir le projet : ',es:'Ver proyecto: '}[language] + translate(label[1]);
    const row = byText.get(text.trim());
    return row ? row[['en','fr','es'].indexOf(language)] : text;
  };
  function render() {
    observer?.disconnect();
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if(node.parentElement?.closest('script,style,[data-language]')) continue;
      const current = node.nodeValue;
      const remembered = originals.get(node);
      // Remember only known phrases; dynamic strings may replace a text node.
      const key = known(current) ? current.trim() : remembered;
      if(!key) continue;
      originals.set(node,key);
      const value = translate(key);
      const padded = current.match(/^\s*/)[0] + value + current.match(/\s*$/)[0];
      if(current !== padded) node.nodeValue = padded;
    }
    document.querySelectorAll('[aria-label],[alt],[title]').forEach(el => {
      ['aria-label','alt','title'].forEach(attr => {
        const value = el.getAttribute(attr);
        if(value && known(value)) {
          const next = translate(value);
          if(next !== value) el.setAttribute(attr,next);
        }
      });
    });
    observer?.observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['aria-label','alt','title']});
  }
  function setLanguage(next) {
    if(!['en','fr','es'].includes(next)) return;
    language=next;
    document.documentElement.lang=next;
    document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.language===next)));
    try { localStorage.setItem('portfolio-language',next); } catch (_) { /* Private storage is optional. */ }
    document.title = {en:'Taha Zerrad | Engineering portfolio',fr:'Taha Zerrad | Portfolio ingénieur',es:'Taha Zerrad | Portafolio de ingeniería'}[next];
    document.querySelector('meta[name="description"]')?.setAttribute('content',{
      en:'Taha Zerrad, engineering student in Tangier. Explore projects, experience, milestones, and download the CV.',
      fr:'Taha Zerrad, élève ingénieur à Tanger. Découvrez ses projets, son expérience, son parcours et téléchargez son CV.',
      es:'Taha Zerrad, estudiante de ingeniería en Tánger. Descubre sus proyectos, experiencia e hitos y descarga su CV.'
    }[next]);
    render();
    document.dispatchEvent(new CustomEvent('portfolio:languagechange',{detail:{language:next}}));
  }
  function init() {
    if(window.portfolioI18n) return;
    observer=new MutationObserver(render);
    window.portfolioI18n={setLanguage,t:translate,has:known};
    document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.language)));
    let stored='en';
    try {stored=localStorage.getItem('portfolio-language') || 'en';} catch (_) {}
    setLanguage(['en','fr','es'].includes(stored)?stored:'en');
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
