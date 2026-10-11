// Selector de idioma: traduce el texto de la página y lo recuerda en este navegador.
// Mismo patrón que theme.js: aplica temprano (script inline en <head>) para evitar parpadeo,
// y vuelve a aplicar al hacer clic en ES/EN.
(function () {
  var KEY = 'setrya-lang';

  var DICT = {
    es: {
      'meta.title': 'SETRYA — Rutinas guiadas por tu perfil y tu objetivo',
      'meta.description': 'SETRYA te propone series, repeticiones y descansos según tu objetivo y tu nivel. Todo se guarda en tu móvil: sin cuenta, sin servidor y sin publicidad.',
      'meta.ogTitle': 'SETRYA — Rutinas guiadas por tu perfil y tu objetivo',
      'meta.ogDescription': 'Asistente de rutina, registro de series, descanso con aviso e historial con gráficas. Todo en tu dispositivo.',
      'meta.titlePrivacy': 'Política de privacidad — SETRYA',
      'meta.descriptionPrivacy': 'Qué datos maneja SETRYA, dónde se guardan y qué control tienes sobre ellos.',

      'header.howItWorks': 'Cómo funciona',
      'header.features': 'Funciones',
      'header.privacy': 'Privacidad',
      'header.soon': 'Próximamente',
      'header.langLabel': 'Idioma',

      'banner.text': '<strong>Buscamos 16 testers</strong> antes del lanzamiento en Google Play — app gratis para siempre + llavero.',
      'banner.cta': 'Apúntate',
      'banner.close': 'Cerrar aviso',

      'intro.skip': 'Saltar',

      'hero.badge': 'Entrenamiento de fuerza',
      'hero.title': 'Rutinas guiadas por tu perfil y tu <span class="accent">objetivo</span>.',
      'hero.lede': 'SETRYA te propone series, repeticiones y descansos según si quieres ganar músculo, perder grasa, ganar fuerza o mantenerte, y según tu nivel. Tú eliges los ejercicios; la app te dice cuánto volumen tiene sentido por grupo muscular.',
      'hero.ctaSoon': 'Próximamente en Play Store',
      'hero.ctaPrivacy': 'Política de privacidad',
      'hero.trustNoAccount': 'Sin cuenta',
      'hero.trustAllOnPhone': 'Todo en tu móvil',
      'hero.trustNoAds': 'Sin publicidad',
      'hero.visualAlt': 'Asistente de rutina de SETRYA, paso 1: elegir el nivel de experiencia',

      'how.overline': 'Cómo funciona',
      'how.title': 'Cómo te guía la app',
      'how.lede': 'Tres pasos. Los números salen de tu perfil, no de una plantilla genérica.',
      'how.step1.title': 'Tu perfil y tu objetivo',
      'how.step1.body': 'Indicas sexo, altura, peso y si quieres ganar músculo, perder grasa, ganar fuerza o mantenerte. Con eso se calcula el volumen semanal que te corresponde.',
      'how.step2.title': 'El asistente de rutina',
      'how.step2.body': 'Eliges tu nivel y los días por semana, de 2 a 6. Para cada día añades ejercicios y la app te sugiere series, repeticiones y descanso, con el volumen de cada grupo muscular actualizado en vivo.',
      'how.step3.title': 'Entrenar y revisar',
      'how.step3.body': 'La app te dice qué día toca, registras peso y repeticiones de cada serie y descansas con el cronómetro. Después ves tu progreso en el historial.',

      'shots.overline': 'La app',
      'shots.title': 'Así se ve en el móvil',
      'shots.lede': 'Capturas reales de la app en un emulador de Android, con datos de ejemplo.',
      'shots.inicio.alt': 'Pantalla de Inicio con el progreso semanal y la siguiente sesión',
      'shots.inicio.caption': '<strong>Inicio</strong> · progreso de la semana y la siguiente sesión.',
      'shots.rutina.alt': 'Rutina con sus días, volumen semanal y ejercicios',
      'shots.rutina.caption': '<strong>Rutina</strong> · días, ejercicios y los números que propone la app.',
      'shots.entrenar.alt': 'Pantalla de Entrenar para registrar las series',
      'shots.entrenar.caption': '<strong>Entrenar</strong> · registras peso y repeticiones de cada serie.',
      'shots.historial.alt': 'Gráfica de peso máximo por sesión de un ejercicio',
      'shots.historial.caption': '<strong>Historial</strong> · progreso de cada ejercicio, sesión a sesión.',
      'shots.clipInicio.ariaLabel': 'Animación del anillo de progreso en la pantalla de Inicio',
      'shots.clipInicio.caption': 'El anillo de progreso se anima al abrir la app.',
      'shots.clipGrafica.ariaLabel': 'Animación de la gráfica de progreso al cambiar el rango de sesiones',
      'shots.clipGrafica.caption': 'Las gráficas se animan al cambiar el rango de sesiones.',

      'themes.overline': 'Temas',
      'themes.title': 'Ocho temas, los de la app',
      'themes.lede': 'Prueba cómo se ve SETRYA con cada tema. Es solo una vista previa de esta página: se recuerda en este navegador y no cambia la app.',
      'themes.radiogroupLabel': 'Tema de color',
      'themes.oscura': 'Original',
      'themes.clara': 'Océano',
      'themes.relax': 'Relax',
      'themes.neon': 'Neon',
      'themes.astro': 'Astro',
      'themes.menta': 'Menta',
      'themes.prisma': 'Prisma',
      'themes.lavanda': 'Lavanda',

      'features.overline': 'Funciones',
      'features.title': 'Todas las funciones',
      'features.lede': 'Todo lo que trae la versión actual de la app, agrupado por pantalla.',

      'features.routines.title': 'Rutinas',
      'features.routines.li1': 'Asistente de rutina en 3 pasos: nivel de experiencia, días por semana (de 2 a 6) y ejercicios de cada día.',
      'features.routines.li2': 'Series, repeticiones y descanso sugeridos según tu objetivo y tu nivel, con la explicación de cada número.',
      'features.routines.li3': 'Volumen semanal por grupo muscular frente al mínimo efectivo, el rango óptimo y el máximo recuperable, con aviso de exceso.',
      'features.routines.li4': 'Varias rutinas guardadas: activa la que toca, edítala, empieza de cero o elimínala.',
      'features.routines.li5': 'Ejercicios a una sola pierna o brazo, reordenables, con descanso propio por ejercicio.',
      'features.routines.li6': 'Superseries, opcionales (puedes ocultarlas desde la configuración).',
      'features.routines.li7': 'Test de carga máxima (1RM): estima tu peso máximo a partir de una serie real y te sugiere el peso para tu rango de repeticiones.',

      'features.train.title': 'Entrenar',
      'features.train.li1': 'Elige el día de tu rutina que toca, o entrena sin rutina con ejercicios elegidos al momento.',
      'features.train.li2': 'Registro de cada serie: repeticiones, peso y marca de serie completada.',
      'features.train.li3': 'Tipos de serie: drop-set, rest-pause, myo-reps, top-set con back-off y pirámide inversa.',
      'features.train.li4': 'Cronómetro de descanso entre series, con aviso al terminar y opción de desactivarlo.',
      'features.train.li5': 'Añade un ejercicio solo para hoy, sin tocar tu rutina guardada.',
      'features.train.li6': 'Ficha de cada ejercicio, con la explicación y su grupo muscular.',
      'features.train.li7': 'Finalizar la sesión la guarda en el historial. Descartarla pregunta si las series completadas deben contar para el volumen semanal.',

      'features.history.title': 'Historial',
      'features.history.li1': 'Gráfica de peso máximo por sesión, con las últimas 10 o todas las sesiones.',
      'features.history.li2': 'Máximo, mínimo y media de cada ejercicio.',
      'features.history.li3': 'Volumen semanal completado por grupo muscular.',
      'features.history.li4': 'Buscar por fecha en un calendario, o buscar un ejercicio por nombre o grupo muscular.',
      'features.history.li5': 'Resumen de cada sesión: series, carga total, calorías y tiempo.',
      'features.history.li6': 'Editar o descartar sesiones pasadas.',
      'features.history.li7': 'Compartir una tarjeta o un texto con tu sesión.',

      'features.home.title': 'Inicio',
      'features.home.li1': 'Anillo de progreso con las series efectivas de la semana frente al objetivo.',
      'features.home.li2': 'Último peso y % de grasa guardados.',
      'features.home.li3': 'Acceso a la última sesión y botón para empezar el siguiente día de tu rutina.',
      'features.home.li4': 'Avisos de recuperación muscular.',
      'features.home.li5': 'Personaliza qué tarjetas ves y en qué orden.',

      'features.profile.title': 'Perfil',
      'features.profile.li1': 'Datos básicos: nombre, fecha de nacimiento, sexo, altura y peso.',
      'features.profile.li2': 'Objetivo: ganar músculo, perder grasa, ganar fuerza o mantenimiento.',
      'features.profile.li3': 'Porcentaje de grasa corporal con el método de la Marina de EE. UU. a partir de medidas.',
      'features.profile.li4': 'Cálculos de metabolismo basal (TMB) y gasto energético diario (GETD).',

      'features.settings.title': 'Ajustes y datos',
      'features.settings.li1': 'Ocho temas de color, que se aplican al instante a toda la app.',
      'features.settings.li2': 'Guardar y restaurar una copia de seguridad en un archivo que tú eliges.',
      'features.settings.li3': 'Copia opcional en Google Drive, en una carpeta oculta que solo usa la app.',
      'features.settings.li4': 'Borrar solo el perfil, solo el historial o todo.',
      'features.settings.li5': 'Health Connect (solo Android): peso, grasa, altura, pasos, calorías y sesiones, cada tipo con su permiso.',
      'features.settings.li6': 'Compartir un resumen de tu entrenamiento en Instagram o Facebook Stories (solo Android).',

      'privacy.overline': 'Privacidad',
      'privacy.title': 'Tus datos se quedan contigo',
      'privacy.lede': 'SETRYA no tiene cuenta de usuario ni servidor propio. Estas son las reglas de la app, sin letra pequeña.',
      'privacy.moreLink': 'Leer la política de privacidad completa',
      'privacy.box1.title': 'Todo en tu dispositivo',
      'privacy.box1.body': 'Perfil, rutinas e historial se guardan en una base de datos local.',
      'privacy.box2.title': 'Sin analítica ni publicidad',
      'privacy.box2.body': 'No hay SDKs de seguimiento ni de anuncios dentro de la app.',
      'privacy.box3.title': 'Lo opcional, solo si lo activas',
      'privacy.box3.body': 'Health Connect y la copia en Google Drive están desactivados por defecto, y puedes revocarlos cuando quieras.',
      'privacy.box4.title': 'Copia en Drive, en tu cuenta',
      'privacy.box4.body': 'Si la usas, se guarda en una carpeta oculta que solo la app puede ver. Nosotros no accedemos a ella.',

      'launch.badge': 'Próximamente en Play Store',
      'launch.title': 'Estamos terminando SETRYA',
      'launch.lede': 'Llegará a Google Play. Esta página se actualizará cuando esté disponible.',

      'footer.copyright': '© 2026 SETRYA · Desarrollada de forma independiente',
      'footer.privacy': 'Política de privacidad',
      'footer.features': 'Funciones',
      'footer.contact': 'Contacto',
      'footer.home': 'Inicio',

      'doc.overline': 'Legal',
      'doc.title': 'Política de privacidad',
      'doc.meta': 'Última actualización: 4 de octubre de 2026',

      'doc.intro': 'Esta política explica qué datos maneja SETRYA (la «App»), cómo se almacenan y qué opciones tienes sobre ellos. SETRYA está desarrollada por un desarrollador independiente («nosotros», «el desarrollador»).',

      'doc.h2.1': '1. Resumen',
      'doc.p.1a': 'SETRYA es una app de entrenamiento <strong>local-first</strong>: no tiene cuenta de usuario ni servidor propio, y toda tu información de entrenamiento se guarda <strong>en tu dispositivo</strong>, en una base de datos local (SQLite). No usamos analítica, publicidad ni rastreadores de terceros: no hay ningún SDK de este tipo integrado en la App.',
      'doc.p.1b': 'Los únicos datos que salen de tu dispositivo lo hacen porque tú activas explícitamente una función opcional (Health Connect, copia de seguridad en Google Drive o compartir en redes sociales), descritas en la sección 3.',

      'doc.h2.2': '2. Datos que se guardan en tu dispositivo',
      'doc.p.2a': 'Al usar SETRYA introduces y la App almacena localmente:',
      'doc.li.2.1': '<strong>Perfil</strong>: nombre, fecha de nacimiento, sexo, altura, peso, medidas corporales opcionales (cuello, cintura, cadera), porcentaje de grasa corporal, nivel de actividad, objetivo de entrenamiento, nivel de experiencia y días de entrenamiento por semana.',
      'doc.li.2.2': '<strong>Rutinas</strong>: los ejercicios, series, repeticiones y descansos que configuras en tus rutinas guardadas.',
      'doc.li.2.3': '<strong>Historial de entrenamientos</strong>: sesiones realizadas, series completadas, pesos y repeticiones registrados, y marcas personales (PRs) calculadas a partir de ellos.',
      'doc.li.2.4': '<strong>Fotos de entrenamiento</strong> (opcional): si eliges añadir una foto a una sesión desde la cámara o la galería de tu dispositivo, esa imagen se guarda en el almacenamiento local de la App.',
      'doc.p.2b': 'Ninguno de estos datos se envía a ningún servidor nuestro, porque SETRYA no tiene servidor. Si desinstalas la App, esta información se borra junto con el resto de datos de la aplicación (salvo la copia que hayas guardado tú mismo con la función de copia de seguridad, ver 3.2).',

      'doc.h2.3': '3. Funciones opcionales que comparten datos con terceros',
      'doc.p.3a': 'Estas funciones están <strong>desactivadas por defecto</strong> y solo actúan si tú las activas explícitamente desde la pantalla de Perfil.',

      'doc.h3.31': '3.1 Health Connect (solo Android)',
      'doc.p.31a': 'Si conectas Health Connect desde Perfil, SETRYA lee y escribe en la plataforma Health Connect de tu dispositivo (gestionada por Google, no por nosotros) los siguientes tipos de datos, cada uno con permiso independiente que puedes conceder o revocar:',
      'doc.table.data': 'Dato',
      'doc.table.read': 'Lectura',
      'doc.table.write': 'Escritura',
      'doc.table.weight': 'Peso',
      'doc.table.bodyFat': 'Porcentaje de grasa corporal',
      'doc.table.height': 'Altura',
      'doc.table.steps': 'Pasos',
      'doc.table.calories': 'Calorías activas',
      'doc.table.sessions': 'Sesiones de ejercicio',
      'doc.table.yes': 'Sí',
      'doc.table.no': 'No',
      'doc.p.31b': 'Peso, grasa corporal y altura se sincronizan en ambas direcciones con tu perfil de SETRYA. Al terminar un entrenamiento, SETRYA lo registra como sesión de ejercicio en Health Connect (con las calorías que calcula la propia App), para que aparezca también en apps como Google Fit. Esta sincronización solo ocurre en Android y solo mientras mantengas los permisos concedidos; puedes revocarlos en cualquier momento desde los ajustes de Health Connect de tu dispositivo. Estos datos permanecen en Health Connect y no pasan por ningún servidor nuestro.',

      'doc.h3.32': '3.2 Copia de seguridad en Google Drive (opcional)',
      'doc.p.32a': 'Si eliges hacer una copia de seguridad, SETRYA te pide iniciar sesión con tu cuenta de Google (mediante Google Sign-In) y solicita permiso de acceso a una carpeta oculta de tu Google Drive reservada para la App (<code>drive.appdata</code>), a la que solo SETRYA puede acceder: no es visible en tu Drive normal ni accesible por otras apps.',
      'doc.li.32.1': 'Se sube un único archivo (<code>setrya-backup.json</code>) con el contenido de tu perfil, rutinas e historial de entrenamientos, sobrescribiendo la copia anterior en cada backup.',
      'doc.li.32.2': 'Ese archivo queda almacenado en tu propia cuenta de Google Drive, sujeto a la <a href="https://policies.google.com/privacy">Política de Privacidad de Google</a>; nosotros no tenemos acceso a él ni a tus credenciales de Google.',
      'doc.li.32.3': 'Puedes cerrar sesión desde la App en cualquier momento, y revocar el acceso de SETRYA a tu cuenta de Google desde los <a href="https://myaccount.google.com/permissions">ajustes de tu cuenta de Google</a>.',
      'doc.li.32.4': 'Solo usamos esta conexión para subir y descargar ese archivo de copia de seguridad; no accedemos a ningún otro dato de tu cuenta de Google.',

      'doc.callout': '<strong>Uso de datos recibidos de las APIs de Google.</strong> El uso que SETRYA hace de la información recibida de las APIs de Google cumple la <a href="https://developers.google.com/terms/api-services-user-data-policy">Política de datos de usuario de los servicios de API de Google</a>, incluidos los requisitos de uso limitado.',

      'doc.h3.33': '3.3 Compartir en Instagram/Facebook Stories (opcional, solo Android)',
      'doc.p.33a': 'Si usas la opción de compartir un resumen de tu entrenamiento en Instagram o Facebook Stories, SETRYA genera una imagen localmente y la pasa directamente a la app de Instagram o Facebook instalada en tu dispositivo mediante un intent nativo de Android. No pasa por ningún servidor nuestro. El uso que Instagram/Facebook (Meta) hagan de esa imagen una vez la compartes se rige por sus propias políticas de privacidad.',

      'doc.h2.4': '4. Permisos del dispositivo',
      'doc.p.4a': 'SETRYA puede solicitar los siguientes permisos, siempre ligados a una función que activas tú:',
      'doc.li.4.1': '<strong>Cámara y galería</strong>: para añadir una foto opcional a un entrenamiento.',
      'doc.li.4.2': '<strong>Notificaciones</strong>: para avisarte cuando termina tu temporizador de descanso entre series.',
      'doc.li.4.3': '<strong>Alarmas exactas</strong> (<code>SCHEDULE_EXACT_ALARM</code>): para que el aviso de fin de descanso llegue puntual aunque el dispositivo esté en reposo.',
      'doc.li.4.4': '<strong>Ignorar optimización de batería</strong>: opcional, para evitar que el sistema retrase las notificaciones del temporizador de descanso.',
      'doc.p.4b': 'Ninguno de estos permisos se usa para recopilar datos con fines distintos a los descritos: no hay seguimiento de ubicación, contactos ni identificadores publicitarios.',

      'doc.h2.5': '5. Lo que SETRYA no hace',
      'doc.li.5.1': 'No usamos analítica de terceros, SDKs publicitarios ni rastreadores de comportamiento.',
      'doc.li.5.2': 'No vendemos ni compartimos tus datos con terceros con fines comerciales o publicitarios.',
      'doc.li.5.3': 'No tenemos cuenta de usuario propia ni servidor donde se almacenen tus datos.',
      'doc.li.5.4': 'No accedemos a tus datos salvo que tú nos los envíes directamente (por ejemplo, si nos escribes para pedir soporte).',

      'doc.h2.6': '6. Seguridad y control de tus datos',
      'doc.p.6a': 'Tus datos viven en la base de datos local de la App, protegida por el sandbox de aplicaciones de Android. Puedes:',
      'doc.li.6.1': 'Editar o eliminar cualquier dato de perfil, rutina o entrenamiento desde la propia App.',
      'doc.li.6.2': 'Revocar el acceso a Health Connect o a Google Drive en cualquier momento, como se explica en la sección 3.',
      'doc.li.6.3': 'Borrar todos tus datos desinstalando la App. Esto no elimina una copia de seguridad ya subida a tu Google Drive; para eso, bórrala desde tu Drive.',

      'doc.h2.7': '7. Menores de edad',
      'doc.p.7a': 'SETRYA no está dirigida a menores de 13 años (o a la edad mínima equivalente que marque la legislación de tu país) y no recopilamos conscientemente datos de menores de esa edad.',

      'doc.h2.8': '8. Cambios en esta política',
      'doc.p.8a': 'Si actualizamos esta política, publicaremos la nueva versión en esta misma página con la fecha de «Última actualización» revisada. Si el cambio es significativo, procuraremos avisarte dentro de la propia App.',

      'doc.h2.9': '9. Contacto',
      'doc.p.9a': 'Si tienes cualquier duda sobre esta política o sobre tus datos, puedes escribirnos a <a href="mailto:contacto.setrya@gmail.com">contacto.setrya@gmail.com</a>.'
    },

    en: {
      'meta.title': 'SETRYA — Routines guided by your profile and your goal',
      'meta.description': 'SETRYA suggests sets, reps and rest times based on your goal and your level. Everything stays on your phone: no account, no server, no ads.',
      'meta.ogTitle': 'SETRYA — Routines guided by your profile and your goal',
      'meta.ogDescription': 'Routine builder, set logging, rest timer with alert and history with charts. All on your device.',
      'meta.titlePrivacy': 'Privacy Policy — SETRYA',
      'meta.descriptionPrivacy': 'What data SETRYA handles, where it is stored, and what control you have over it.',

      'header.howItWorks': 'How it works',
      'header.features': 'Features',
      'header.privacy': 'Privacy',
      'header.soon': 'Coming soon',
      'header.langLabel': 'Language',

      'banner.text': '<strong>Looking for 16 testers</strong> before launching on Google Play — free forever + a keychain.',
      'banner.cta': 'Sign up',
      'banner.close': 'Close notice',

      'intro.skip': 'Skip',

      'hero.badge': 'Strength training',
      'hero.title': 'Routines guided by your profile and your <span class="accent">goal</span>.',
      'hero.lede': 'SETRYA suggests sets, reps and rest based on whether you want to gain muscle, lose fat, gain strength or maintain, and on your level. You pick the exercises; the app tells you how much volume makes sense per muscle group.',
      'hero.ctaSoon': 'Coming soon to Play Store',
      'hero.ctaPrivacy': 'Privacy policy',
      'hero.trustNoAccount': 'No account',
      'hero.trustAllOnPhone': 'All on your phone',
      'hero.trustNoAds': 'No ads',
      'hero.visualAlt': 'SETRYA routine wizard, step 1: choosing your experience level',

      'how.overline': 'How it works',
      'how.title': 'How the app guides you',
      'how.lede': 'Three steps. The numbers come from your profile, not a generic template.',
      'how.step1.title': 'Your profile and your goal',
      'how.step1.body': 'You enter sex, height, weight and whether you want to gain muscle, lose fat, gain strength or maintain. From that, the weekly volume that fits you is calculated.',
      'how.step2.title': 'The routine wizard',
      'how.step2.body': 'You choose your level and days per week, from 2 to 6. For each day you add exercises and the app suggests sets, reps and rest, with each muscle group\'s volume updated live.',
      'how.step3.title': 'Train and review',
      'how.step3.body': 'The app tells you which day is up, you log weight and reps for each set and rest with the timer. Afterwards you see your progress in the history.',

      'shots.overline': 'The app',
      'shots.title': 'What it looks like on your phone',
      'shots.lede': 'Real screenshots of the app on an Android emulator, with sample data.',
      'shots.inicio.alt': 'Home screen with the weekly progress and the next session',
      'shots.inicio.caption': '<strong>Home</strong> · weekly progress and the next session.',
      'shots.rutina.alt': 'Routine with its days, weekly volume and exercises',
      'shots.rutina.caption': '<strong>Routine</strong> · days, exercises and the numbers the app suggests.',
      'shots.entrenar.alt': 'Train screen for logging sets',
      'shots.entrenar.caption': '<strong>Train</strong> · log weight and reps for each set.',
      'shots.historial.alt': 'Chart of max weight per session for an exercise',
      'shots.historial.caption': '<strong>History</strong> · progress for each exercise, session by session.',
      'shots.clipInicio.ariaLabel': 'Animation of the progress ring on the Home screen',
      'shots.clipInicio.caption': 'The progress ring animates when you open the app.',
      'shots.clipGrafica.ariaLabel': 'Animation of the progress chart when changing the session range',
      'shots.clipGrafica.caption': 'The charts animate when you change the session range.',

      'themes.overline': 'Themes',
      'themes.title': 'Eight themes, straight from the app',
      'themes.lede': 'See what SETRYA looks like with each theme. This is just a preview on this page: it\'s remembered in this browser and doesn\'t change the app.',
      'themes.radiogroupLabel': 'Color theme',
      'themes.oscura': 'Original',
      'themes.clara': 'Ocean',
      'themes.relax': 'Relax',
      'themes.neon': 'Neon',
      'themes.astro': 'Astro',
      'themes.menta': 'Mint',
      'themes.prisma': 'Prism',
      'themes.lavanda': 'Lavender',

      'features.overline': 'Features',
      'features.title': 'All the features',
      'features.lede': 'Everything in the current version of the app, grouped by screen.',

      'features.routines.title': 'Routines',
      'features.routines.li1': '3-step routine wizard: experience level, days per week (2 to 6) and exercises for each day.',
      'features.routines.li2': 'Sets, reps and rest suggested from your goal and your level, with an explanation for every number.',
      'features.routines.li3': 'Weekly volume per muscle group against the effective minimum, the optimal range and the recoverable maximum, with an overshoot warning.',
      'features.routines.li4': 'Several saved routines: activate the one you need, edit it, start from scratch or delete it.',
      'features.routines.li5': 'Single-leg or single-arm exercises, reorderable, each with its own rest time.',
      'features.routines.li6': 'Optional supersets (you can hide them from settings).',
      'features.routines.li7': '1RM test: estimates your max weight from a real set and suggests the weight for your rep range.',

      'features.train.title': 'Train',
      'features.train.li1': 'Pick the day from your routine that\'s up, or train without a routine with exercises chosen on the spot.',
      'features.train.li2': 'Logging for each set: reps, weight and a completed-set mark.',
      'features.train.li3': 'Set types: drop set, rest-pause, myo-reps, top set with back-off and reverse pyramid.',
      'features.train.li4': 'Rest timer between sets, with an alert when it ends and an option to turn it off.',
      'features.train.li5': 'Add an exercise just for today, without touching your saved routine.',
      'features.train.li6': 'A card for each exercise, with an explanation and its muscle group.',
      'features.train.li7': 'Finishing the session saves it to the history. Discarding it asks whether completed sets should still count towards weekly volume.',

      'features.history.title': 'History',
      'features.history.li1': 'Chart of max weight per session, showing the last 10 or every session.',
      'features.history.li2': 'Max, min and average for each exercise.',
      'features.history.li3': 'Weekly volume completed per muscle group.',
      'features.history.li4': 'Search by date on a calendar, or search for an exercise by name or muscle group.',
      'features.history.li5': 'Summary of each session: sets, total load, calories and time.',
      'features.history.li6': 'Edit or discard past sessions.',
      'features.history.li7': 'Share a card or a text with your session.',

      'features.home.title': 'Home',
      'features.home.li1': 'Progress ring with the week\'s effective sets against the goal.',
      'features.home.li2': 'Latest saved weight and body fat %.',
      'features.home.li3': 'Access to the latest session and a button to start the next day of your routine.',
      'features.home.li4': 'Muscle recovery warnings.',
      'features.home.li5': 'Customize which cards you see and in what order.',

      'features.profile.title': 'Profile',
      'features.profile.li1': 'Basic data: name, date of birth, sex, height and weight.',
      'features.profile.li2': 'Goal: gain muscle, lose fat, gain strength or maintain.',
      'features.profile.li3': 'Body fat percentage using the US Navy method from body measurements.',
      'features.profile.li4': 'Basal metabolic rate (BMR) and total daily energy expenditure (TDEE) calculations.',

      'features.settings.title': 'Settings and data',
      'features.settings.li1': 'Eight color themes, applied instantly across the whole app.',
      'features.settings.li2': 'Save and restore a backup to a file you choose.',
      'features.settings.li3': 'Optional Google Drive backup, in a hidden folder only the app can use.',
      'features.settings.li4': 'Delete just the profile, just the history, or everything.',
      'features.settings.li5': 'Health Connect (Android only): weight, body fat, height, steps, calories and sessions, each with its own permission.',
      'features.settings.li6': 'Share a workout summary to Instagram or Facebook Stories (Android only).',

      'privacy.overline': 'Privacy',
      'privacy.title': 'Your data stays with you',
      'privacy.lede': 'SETRYA has no user account and no server of its own. Here are the app\'s rules, no fine print.',
      'privacy.moreLink': 'Read the full privacy policy',
      'privacy.box1.title': 'Everything on your device',
      'privacy.box1.body': 'Profile, routines and history are stored in a local database.',
      'privacy.box2.title': 'No analytics or ads',
      'privacy.box2.body': 'There are no tracking or advertising SDKs inside the app.',
      'privacy.box3.title': 'Optional features, only if you turn them on',
      'privacy.box3.body': 'Health Connect and the Google Drive backup are off by default, and you can revoke them whenever you want.',
      'privacy.box4.title': 'Drive backup, in your own account',
      'privacy.box4.body': 'If you use it, it\'s stored in a hidden folder only the app can see. We don\'t access it.',

      'launch.badge': 'Coming soon to Play Store',
      'launch.title': 'We\'re finishing up SETRYA',
      'launch.lede': 'It\'s coming to Google Play. This page will be updated once it\'s available.',

      'footer.copyright': '© 2026 SETRYA · Independently developed',
      'footer.privacy': 'Privacy policy',
      'footer.features': 'Features',
      'footer.contact': 'Contact',
      'footer.home': 'Home',

      'doc.overline': 'Legal',
      'doc.title': 'Privacy Policy',
      'doc.meta': 'Last updated: October 4, 2026',

      'doc.intro': 'This policy explains what data SETRYA (the "App") handles, how it is stored, and what choices you have about it. SETRYA is developed by an independent developer ("we", "the developer").',

      'doc.h2.1': '1. Summary',
      'doc.p.1a': 'SETRYA is a <strong>local-first</strong> training app: it has no user account and no server of its own, and all your training data is stored <strong>on your device</strong>, in a local database (SQLite). We don\'t use third-party analytics, advertising or trackers: no SDK of that kind is built into the App.',
      'doc.p.1b': 'The only data that leaves your device does so because you explicitly turn on an optional feature (Health Connect, Google Drive backup, or sharing to social media), described in section 3.',

      'doc.h2.2': '2. Data stored on your device',
      'doc.p.2a': 'By using SETRYA you enter, and the App stores locally:',
      'doc.li.2.1': '<strong>Profile</strong>: name, date of birth, sex, height, weight, optional body measurements (neck, waist, hip), body fat percentage, activity level, training goal, experience level and training days per week.',
      'doc.li.2.2': '<strong>Routines</strong>: the exercises, sets, reps and rest times you configure in your saved routines.',
      'doc.li.2.3': '<strong>Training history</strong>: completed sessions, finished sets, logged weights and reps, and personal records (PRs) calculated from them.',
      'doc.li.2.4': '<strong>Workout photos</strong> (optional): if you choose to add a photo to a session from your device\'s camera or gallery, that image is saved in the App\'s local storage.',
      'doc.p.2b': 'None of this data is sent to any server of ours, because SETRYA doesn\'t have one. If you uninstall the App, this information is deleted along with the rest of the app\'s data (except for a backup you\'ve saved yourself using the backup feature, see 3.2).',

      'doc.h2.3': '3. Optional features that share data with third parties',
      'doc.p.3a': 'These features are <strong>off by default</strong> and only act if you explicitly turn them on from the Profile screen.',

      'doc.h3.31': '3.1 Health Connect (Android only)',
      'doc.p.31a': 'If you connect Health Connect from Profile, SETRYA reads and writes the following data types on your device\'s Health Connect platform (managed by Google, not by us), each with an independent permission you can grant or revoke:',
      'doc.table.data': 'Data',
      'doc.table.read': 'Read',
      'doc.table.write': 'Write',
      'doc.table.weight': 'Weight',
      'doc.table.bodyFat': 'Body fat percentage',
      'doc.table.height': 'Height',
      'doc.table.steps': 'Steps',
      'doc.table.calories': 'Active calories',
      'doc.table.sessions': 'Exercise sessions',
      'doc.table.yes': 'Yes',
      'doc.table.no': 'No',
      'doc.p.31b': 'Weight, body fat and height sync in both directions with your SETRYA profile. When you finish a workout, SETRYA logs it as an exercise session in Health Connect (with the calories the App itself calculates), so it also shows up in apps like Google Fit. This sync only happens on Android and only while you keep the permissions granted; you can revoke them at any time from your device\'s Health Connect settings. This data stays in Health Connect and does not pass through any server of ours.',

      'doc.h3.32': '3.2 Google Drive backup (optional)',
      'doc.p.32a': 'If you choose to make a backup, SETRYA asks you to sign in with your Google account (via Google Sign-In) and requests access to a hidden folder in your Google Drive reserved for the App (<code>drive.appdata</code>), which only SETRYA can access: it\'s not visible in your regular Drive and isn\'t accessible by other apps.',
      'doc.li.32.1': 'A single file (<code>setrya-backup.json</code>) is uploaded with the contents of your profile, routines and training history, overwriting the previous backup each time.',
      'doc.li.32.2': 'That file is stored in your own Google Drive account, subject to <a href="https://policies.google.com/privacy">Google\'s Privacy Policy</a>; we have no access to it or to your Google credentials.',
      'doc.li.32.3': 'You can sign out from the App at any time, and revoke SETRYA\'s access to your Google account from your <a href="https://myaccount.google.com/permissions">Google account settings</a>.',
      'doc.li.32.4': 'We only use this connection to upload and download that backup file; we don\'t access any other data in your Google account.',

      'doc.callout': '<strong>Use of data received from Google APIs.</strong> SETRYA\'s use of information received from Google APIs adheres to the <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>, including the Limited Use requirements.',

      'doc.h3.33': '3.3 Sharing to Instagram/Facebook Stories (optional, Android only)',
      'doc.p.33a': 'If you use the option to share a workout summary to Instagram or Facebook Stories, SETRYA generates an image locally and hands it directly to the Instagram or Facebook app installed on your device via a native Android intent. It doesn\'t pass through any server of ours. Instagram/Facebook\'s (Meta\'s) use of that image once you share it is governed by their own privacy policies.',

      'doc.h2.4': '4. Device permissions',
      'doc.p.4a': 'SETRYA may request the following permissions, always tied to a feature you turn on:',
      'doc.li.4.1': '<strong>Camera and gallery</strong>: to add an optional photo to a workout.',
      'doc.li.4.2': '<strong>Notifications</strong>: to alert you when your rest timer between sets ends.',
      'doc.li.4.3': '<strong>Exact alarms</strong> (<code>SCHEDULE_EXACT_ALARM</code>): so the end-of-rest alert arrives on time even while the device is idle.',
      'doc.li.4.4': '<strong>Ignore battery optimization</strong>: optional, to prevent the system from delaying rest timer notifications.',
      'doc.p.4b': 'None of these permissions are used to collect data for purposes other than those described: there is no location, contacts or advertising identifier tracking.',

      'doc.h2.5': '5. What SETRYA doesn\'t do',
      'doc.li.5.1': 'We don\'t use third-party analytics, advertising SDKs or behavioral trackers.',
      'doc.li.5.2': 'We don\'t sell or share your data with third parties for commercial or advertising purposes.',
      'doc.li.5.3': 'We have no user account system and no server where your data is stored.',
      'doc.li.5.4': 'We don\'t access your data unless you send it to us directly (for example, if you write to us for support).',

      'doc.h2.6': '6. Security and control over your data',
      'doc.p.6a': 'Your data lives in the App\'s local database, protected by Android\'s app sandbox. You can:',
      'doc.li.6.1': 'Edit or delete any profile, routine or workout data from within the App itself.',
      'doc.li.6.2': 'Revoke access to Health Connect or Google Drive at any time, as explained in section 3.',
      'doc.li.6.3': 'Delete all your data by uninstalling the App. This does not delete a backup already uploaded to your Google Drive; for that, delete it from your Drive.',

      'doc.h2.7': '7. Minors',
      'doc.p.7a': 'SETRYA is not directed at children under 13 (or the equivalent minimum age under your country\'s law), and we do not knowingly collect data from children under that age.',

      'doc.h2.8': '8. Changes to this policy',
      'doc.p.8a': 'If we update this policy, we\'ll publish the new version on this same page with a revised "Last updated" date. If the change is significant, we\'ll try to notify you within the App itself.',

      'doc.h2.9': '9. Contact',
      'doc.p.9a': 'If you have any questions about this policy or your data, you can write to us at <a href="mailto:contacto.setrya@gmail.com">contacto.setrya@gmail.com</a>.'
    }
  };

  function detectDefault() {
    try {
      var nav = (navigator.language || navigator.userLanguage || 'es').toLowerCase();
      return nav.indexOf('en') === 0 ? 'en' : 'es';
    } catch (e) {
      return 'es';
    }
  }

  function saved() {
    try {
      var v = localStorage.getItem(KEY);
      return DICT.hasOwnProperty(v) ? v : null;
    } catch (e) {
      return null;
    }
  }

  function current() {
    return saved() || detectDefault();
  }

  function t(key, lang) {
    var table = DICT[lang] || DICT.es;
    return table.hasOwnProperty(key) ? table[key] : (DICT.es[key] || key);
  }

  var ATTR_MAP = {
    'data-i18n-alt': 'alt',
    'data-i18n-aria-label': 'aria-label',
    'data-i18n-title': 'title',
    'data-i18n-placeholder': 'placeholder',
    'data-i18n-content': 'content'
  };

  function apply(lang) {
    document.documentElement.setAttribute('lang', lang);

    var htmlNodes = document.querySelectorAll('[data-i18n-html]');
    for (var i = 0; i < htmlNodes.length; i++) {
      htmlNodes[i].innerHTML = t(htmlNodes[i].getAttribute('data-i18n-html'), lang);
    }

    var textNodes = document.querySelectorAll('[data-i18n]');
    for (var j = 0; j < textNodes.length; j++) {
      textNodes[j].textContent = t(textNodes[j].getAttribute('data-i18n'), lang);
    }

    for (var attr in ATTR_MAP) {
      if (!ATTR_MAP.hasOwnProperty(attr)) continue;
      var target = ATTR_MAP[attr];
      var nodes = document.querySelectorAll('[' + attr + ']');
      for (var k = 0; k < nodes.length; k++) {
        nodes[k].setAttribute(target, t(nodes[k].getAttribute(attr), lang));
      }
    }

    var opts = document.querySelectorAll('.lang-opt');
    for (var o = 0; o < opts.length; o++) {
      opts[o].setAttribute('aria-pressed', opts[o].getAttribute('data-lang-id') === lang ? 'true' : 'false');
    }
  }

  apply(current());

  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('.lang-opt') : null;
    if (!btn) return;
    var id = btn.getAttribute('data-lang-id');
    apply(id);
    try {
      localStorage.setItem(KEY, id);
    } catch (err) {
      // Sin almacenamiento (modo privado, datos bloqueados): el idioma solo dura esta visita.
    }
  });
})();
