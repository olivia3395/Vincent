export interface Painting {
  id: string;
  title: string;
  year: string;
  description: string;
  brushstrokeDetail: string;
  image: string;
  location: string;
  locationUrl: string;
}

export const paintings: Painting[] = [
  {
    id: 'self-portrait-bandaged-ear',
    title: 'Self-Portrait with Bandaged Ear',
    year: '1889',
    description: 'Painted after the incident with his ear.',
    brushstrokeDetail: 'Intense gaze and controlled, yet urgent strokes.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Vincent_van_Gogh_-_Self-portrait_with_bandaged_ear_%281889%2C_Courtauld_Institute%29.jpg/960px-Vincent_van_Gogh_-_Self-portrait_with_bandaged_ear_%281889%2C_Courtauld_Institute%29.jpg',
    location: 'Courtauld Gallery, London',
    locationUrl: 'https://courtauld.ac.uk/',
  },
  {
    id: 'sunflowers',
    title: 'Sunflowers',
    year: '1888',
    description: 'One of a series of paintings depicting sunflowers, symbolic of gratitude and friendship.',
    brushstrokeDetail: 'Thick, vigorous strokes define the texture of both the petals and the vase.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vincent_Willem_van_Gogh_127.jpg/500px-Vincent_Willem_van_Gogh_127.jpg',
    location: 'National Gallery, London',
    locationUrl: 'https://www.nationalgallery.org.uk/',
  },
  {
    id: 'cafe-terrace',
    title: 'Cafe Terrace at Night',
    year: '1888',
    description: 'The first painting to feature his signature star-filled sky.',
    brushstrokeDetail: 'Contrasting warm yellows and cool blues emphasize the atmosphere.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Vincent_van_Gogh_%281853-1890%29_Caf%C3%A9terras_bij_nacht_%28place_du_Forum%29_Kr%C3%B6ller-M%C3%BCller_Museum_Otterlo_23-8-2016_13-35-40.JPG/960px-Vincent_van_Gogh_%281853-1890%29_Caf%C3%A9terras_bij_nacht_%28place_du_Forum%29_Kr%C3%B6ller-M%C3%BCller_Museum_Otterlo_23-8-2016_13-35-40.JPG',
    location: 'Kröller-Müller Museum, Otterlo',
    locationUrl: 'https://krollermuller.nl/',
  },
  {
    id: 'irises',
    title: 'Irises',
    year: '1889',
    description: 'Painted while he was at the asylum, it shows a close study of the flowers.',
    brushstrokeDetail: 'Dynamic lines capture the vibrant, bending nature of the irises.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Irises-Vincent_van_Gogh.jpg/960px-Irises-Vincent_van_Gogh.jpg',
    location: 'Getty Center, Los Angeles',
    locationUrl: 'https://www.getty.edu/',
  },
  {
    id: 'potato-eaters',
    title: 'The Potato Eaters',
    year: '1885',
    description: 'A dark, moody depiction of peasants eating a meal.',
    brushstrokeDetail: 'Heavy, earthy strokes convey the harshness of their labor.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Van-willem-vincent-gogh-die-kartoffelesser-03850.jpg/960px-Van-willem-vincent-gogh-die-kartoffelesser-03850.jpg',
    location: 'Van Gogh Museum, Amsterdam',
    locationUrl: 'https://www.vangoghmuseum.nl/',
  },
  {
    id: 'bedroom-arles',
    title: 'Bedroom in Arles',
    year: '1888',
    description: 'Showing his bedroom in the Yellow House, emphasizing comfort and repose.',
    brushstrokeDetail: 'Bright, flat color fields and sturdy outlines create strong perspective.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg/960px-Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg',
    location: 'Van Gogh Museum, Amsterdam',
    locationUrl: 'https://www.vangoghmuseum.nl/',
  },
  {
    id: 'starry-night',
    title: 'The Starry Night',
    year: '1889',
    description: 'Painted in the asylum in Saint-Rémy-de-Provence, it depicts the view from his east-facing window.',
    brushstrokeDetail: 'Dynamic, swirling impasto brushstrokes create a sense of movement in the cosmic sky.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1920px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
    location: 'MoMA, New York',
    locationUrl: 'https://www.moma.org/',
  },
  {
    id: 'almond-blossoms',
    title: 'Almond Blossoms',
    year: '1890',
    description: 'A symbol of new life, painted for his new nephew.',
    brushstrokeDetail: 'Delicate, almost Japanese-inspired lines.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg/960px-Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg',
    location: 'Van Gogh Museum, Amsterdam',
    locationUrl: 'https://www.vangoghmuseum.nl/',
  },
  {
    id: 'dr-gachet',
    title: 'Portrait of Dr. Gachet',
    year: '1890',
    description: 'A portrait of the doctor who cared for Van Gogh in his final months.',
    brushstrokeDetail: 'Deep blues and thick, expressive lines defining the melancholic figure.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Portrait_of_Dr._Gachet.jpg/500px-Portrait_of_Dr._Gachet.jpg',
    location: 'Musée d\'Orsay, Paris',
    locationUrl: 'https://www.musee-orsay.fr/',
  },
  {
    id: 'night-cafe',
    title: 'The Night Café',
    year: '1888',
    description: 'Depicts the interior of the Café de la Gare in Arles.',
    brushstrokeDetail: 'Violent blues and reds create a jarring, tension-filled space.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vincent_Willem_van_Gogh_076.jpg/960px-Vincent_Willem_van_Gogh_076.jpg',
    location: 'Yale University Art Gallery, New Haven',
    locationUrl: 'https://artgallery.yale.edu/',
  },
  {
    id: 'sower',
    title: 'Sower with Setting Sun',
    year: '1888',
    description: 'A theme Van Gogh returned to many times, symbolizing life cycle.',
    brushstrokeDetail: 'Contrast between the dark sower and the radiant, low sun.',
    image: 'https://www.worldhistory.org/uploads/images/15474.png',
    location: 'Bührle Foundation, Zurich',
    locationUrl: 'https://www.buehrle.ch/',
  },
  {
    id: 'olive-trees',
    title: 'Olive Trees',
    year: '1889',
    description: 'Painted in Saint-Rémy, capturing the gnarled, ancient trees.',
    brushstrokeDetail: 'Rhythmic, swirling strokes mimic the movement of the branches.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Van_Gogh_The_Olive_Trees..jpg/960px-Van_Gogh_The_Olive_Trees..jpg',
    location: 'MoMA, New York',
    locationUrl: 'https://www.moma.org/',
  },
  {
    id: 'sunflowers-vase',
    title: 'Vase with Twelve Sunflowers',
    year: '1888',
    description: 'One of the most famous variations of his sunflower series.',
    brushstrokeDetail: 'Staccato, vibrant strokes creating the flower heads.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vincent_Willem_van_Gogh_127.jpg/500px-Vincent_Willem_van_Gogh_127.jpg',
    location: 'Neue Pinakothek, Munich',
    locationUrl: 'https://www.pinakothek.de/',
  },
  {
    id: 'yellow-house',
    title: 'The Yellow House',
    year: '1888',
    description: 'The house in Arles where Van Gogh lived and worked.',
    brushstrokeDetail: 'Bright, bold colors defining the building and its surroundings.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Vincent_van_Gogh_-_The_yellow_house_%28%27The_street%27%29.jpg/960px-Vincent_van_Gogh_-_The_yellow_house_%28%27The_street%27%29.jpg',
    location: 'Van Gogh Museum, Amsterdam',
    locationUrl: 'https://www.vangoghmuseum.nl/',
  },
  {
    id: 'starry-rhone',
    title: 'Starry Night Over the Rhône',
    year: '1888',
    description: 'Painted shortly before his famous Starry Night.',
    brushstrokeDetail: 'Reflective light shimmering on the water’s surface.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Starry_Night_Over_the_Rhone.jpg/960px-Starry_Night_Over_the_Rhone.jpg',
    location: 'Musée d\'Orsay, Paris',
    locationUrl: 'https://www.musee-orsay.fr/',
  },
  {
    id: 'the-harvest',
    title: 'The Harvest',
    year: '1888',
    description: 'A masterpiece showing the wheat fields during the harvest in Arles.',
    brushstrokeDetail: 'Flat planes of brilliant yellow and gold.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Vincent_van_Gogh_-_De_oogst_-_Google_Art_Project.jpg/1280px-Vincent_van_Gogh_-_De_oogst_-_Google_Art_Project.jpg',
    location: 'Van Gogh Museum, Amsterdam',
    locationUrl: 'https://www.vangoghmuseum.nl/',
  },
  {
    id: 'at-eternitys-gate',
    title: 'At Eternity\'s Gate',
    year: '1890',
    description: 'An old man sitting in sorrow with his face in his hands.',
    brushstrokeDetail: 'Expressive pose and somber color palette.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/At_Eternity%27s_Gate_-_Vincent_Van_Gogh.jpg/960px-At_Eternity%27s_Gate_-_Vincent_Van_Gogh.jpg',
    location: 'Kröller-Müller Museum, Otterlo',
    locationUrl: 'https://krollermuller.nl/',
  },
  {
    id: 'church-auvers',
    title: 'The Church at Auvers',
    year: '1890',
    description: 'Depicts the church in Auvers-sur-Oise.',
    brushstrokeDetail: 'Wavy lines and rich color.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Vincent_van_Gogh_-_The_Church_in_Auvers-sur-Oise%2C_View_from_the_Chevet_-_Google_Art_Project.jpg/500px-Vincent_van_Gogh_-_The_Church_in_Auvers-sur-Oise%2C_View_from_the_Chevet_-_Google_Art_Project.jpg',
    location: 'Musée d\'Orsay, Paris',
    locationUrl: 'https://www.musee-orsay.fr/',
  },
];


export interface Letter {
  id: string;
  title: string;
  excerpt: string;
}

export const letters: Letter[] = [
  {
    id: 'letter-theo-1888',
    title: 'To Theo (1888)',
    excerpt: 'I am using color more arbitrarily so as to express myself forcibly.',
  },
  {
    id: 'letter-theo-1890',
    title: 'To Theo (1890)',
    excerpt: 'I have done my work as an artist, and in it I have risked my life and my sanity.',
  },
  {
    id: 'letter-emile-1888',
    title: 'To Émile Bernard (1888)',
    excerpt: 'When one learns how to look at nature, one slowly learns how to live.',
  },
  {
    id: 'letter-theo-1883',
    title: 'To Theo (1883)',
    excerpt: 'I feel a certain power within me that must be released.',
  },
  {
    id: 'letter-hoornik-1882',
    title: 'To Sien Hoornik (1882)',
    excerpt: 'Life is so full of sorrow, but there is always the possibility of peace through art.',
  },
  {
    id: 'letter-theo-1889',
    title: 'To Theo (1889)',
    excerpt: 'My life itself is also hanging by a thread.',
  }
];

export interface Film {
  id: string;
  title: string;
  year: string;
  description: string;
  imdbUrl: string;
}

export const films: Film[] = [
  {
    id: 'loving-vincent',
    title: 'Loving Vincent',
    year: '2017',
    description: 'An experimental film exploring Van Gogh\'s life and death, entirely painted in his own style.',
    imdbUrl: 'https://www.imdb.com/title/tt3262342/',
  },
  {
    id: 'at-eternitys-gate',
    title: 'At Eternity\'s Gate',
    year: '2018',
    description: 'A look at the final years of Vincent van Gogh, captured with intimate intensity.',
    imdbUrl: 'https://www.imdb.com/title/tt7388586/',
  },
  {
    id: 'lust-for-life',
    title: 'Lust for Life',
    year: '1956',
    description: 'A classic portrayal of Vincent van Gogh\'s turbulent life and artistic journey.',
    imdbUrl: 'https://www.imdb.com/title/tt0049456/',
  },
];

export const biography = {
  summary: "Vincent Willem van Gogh, a tortured genius of the post-impressionist era, wandered through a life defined by unparalleled passion and profound suffering. His paintings are not merely images, but windows into a burning consciousness, where vibrant, feverish colors dance with the darkness of his soul. In his short, tragic career, he transformed how we perceive the world, turning mundane scenes into masterpieces of emotional intensity.",
  keyDetails: [
    "Born: March 30, 1853, in Groot Zundert, Netherlands.",
    "A life of restless search: From aspiring preacher to misunderstood artist.",
    "The Arles dream: Seeking a sanctuary of light and color, his intensity led both to creation and collapse.",
    "The asylum at Saint-Rémy: In the depths of his mental anguish, his greatest cosmic visions were born.",
    "A legacy of light: Though he died in despair, his art remains a beacon of undying human spirit.",
    "Died: July 29, 1890, in Auvers-sur-Oise, aged 37."
  ]
};

export interface Quote {
  id: string;
  text: string;
  year?: string;
  context: string;
}

export const quotes: Quote[] = [
  { 
    id: 'q1', 
    year: '1880',
    text: 'I am seeking. I am striving. I am in it with all my heart.',
    context: 'Written during his time in the Borinage, while grappling with his future and final decision to commit to art.'
  },
  { 
    id: 'q2', 
    year: '1888',
    text: 'I dream my painting and I paint my dream.',
    context: 'Expressed during his productive period in Arles, capturing his creative philosophy.'
  },
  { 
    id: 'q3', 
    year: '1880',
    text: 'What would life be if we had no courage to attempt anything?',
    context: 'When he was struggling to find his direction and fighting internal demons.'
  },
  { 
    id: 'q4', 
    year: '1888',
    text: 'I am using color more arbitrarily so as to express myself forcibly.',
    context: 'Discussing his evolving revolutionary approach to color and emotional expression.'
  },
  { 
    id: 'q5', 
    year: '1889',
    text: 'I put my heart and my soul into my work, and have lost my mind in the process.',
    context: 'From his time in Saint-Rémy, reflecting on the heavy toll his artistic intensity took on his mental health.'
  },
  { 
    id: 'q6', 
    year: '1888',
    text: 'I should like it if you would look at my painting as if it were a window looking out on the universe.',
    context: 'In a letter, explaining his desire for his art to connect people to the broader scope of existence.'
  },
  { 
    id: 'q7', 
    year: '1874',
    text: 'It’s a wonderful thing to know that we’re not alone.',
    context: 'Early in his life, before fully committing to art, showing his need for connection.'
  },
  { 
    id: 'q8', 
    year: '1889',
    text: 'The fishermen know that the sea is dangerous and the storm terrible, but they have never found these dangers sufficient reason for remaining ashore.',
    context: 'Written when he was finding comfort in the bravery of others who confront life’s hardships.'
  },
  { 
    id: 'q9', 
    year: '1888',
    text: 'I am not an adventurer by choice but by fate.',
    context: 'Reflecting on his itinerant life and the choices thrust upon him.'
  },
  { 
    id: 'q10', 
    year: '1890',
    text: 'The sadness will last forever.',
    context: 'Often attributed to his final words to Theo, reflecting the immense weight of his final struggles.'
  },
];

export interface Friend {
  id: string;
  name: string;
  relationship: string;
  context: string;
  link: string;
}

export const friends: Friend[] = [
  {
    id: 'theo',
    name: 'Theo van Gogh',
    relationship: 'Brother & Supporter',
    context: 'Vincent\'s younger brother and devoted patron. Their correspondence is the most detailed record of Vincent\'s life.',
    link: 'https://www.vangoghmuseum.nl/en/art-and-stories/stories/theo-van-gogh',
  },
  {
    id: 'gauguin',
    name: 'Paul Gauguin',
    relationship: 'Fellow Artist',
    context: 'A post-impressionist friend who lived and worked with Vincent in Arles; their partnership was intense and eventually volatile.',
    link: 'https://en.wikipedia.org/wiki/Paul_Gauguin',
  },
  {
    id: 'bernard',
    name: 'Émile Bernard',
    relationship: 'Artist Friend',
    context: 'A fellow painter in Paris and Arles, with whom Vincent exchanged letters about painting techniques and philosophy.',
    link: 'https://en.wikipedia.org/wiki/%C3%89mile_Bernard',
  },
  {
    id: 'rappard',
    name: 'Anthon van Rappard',
    relationship: 'Early Friend & Artist',
    context: 'An artist whom Vincent met early in his career and with whom he studied and discussed art extensively.',
    link: 'https://en.wikipedia.org/wiki/Anthon_van_Rappard',
  },
];

export interface TimelineEvent {
  id: string;
  year: string;
  event: string;
}

export const timeline: TimelineEvent[] = [
  { id: 't1', year: '1853', event: 'Vincent is born in Groot-Zundert, the eldest son of a minister.' },
  { id: 't2', year: '1869', event: 'Begins working for art dealers, marking his first exposure to the art world.' },
  { id: 't3', year: '1878', event: 'Moves to the Borinage, a coal mining region, where he lives in extreme poverty amidst the miners, attempting to be a preacher.' },
  { id: 't4', year: '1880', event: 'Realizing he is not meant for the church, he decides to dedicate his life to art. A pivotal turning point.' },
  { id: 't5', year: '1886', event: 'Moves to Paris to live with his brother Theo. Exposed to the light and color of Impressionism and Japanese prints.' },
  { id: 't6', year: '1888', event: 'Arrives in Arles, seeking the "south." Rents The Yellow House, hoping to create an artist colony. Joy, followed by mental health collapse and the ear incident.' },
  { id: 't7', year: '1889', event: 'Voluntarily enters the asylum at Saint-Rémy-de-Provence. Creates his greatest cosmic visions, including *The Starry Night*.' },
  { id: 't8', year: '1890', event: 'Moves to Auvers-sur-Oise. A period of intense productivity followed by deepening despair. Dies on July 29th, aged 37.' },
];

export const audioOptions = [
  { id: 'wheat-wind', name: 'Wheat Field Wind', file: 'wheat-wind.mp3' },
  { id: 'field-birds', name: 'Field Birds', file: 'field-birds.mp3' },
  { id: 'insects', name: 'Distant Insects', file: 'insects.mp3' },
  { id: 'faint-bell', name: 'Faint Bell', file: 'faint-bell.mp3' },
  { id: 'palette-scraping', name: 'Palette Scraping', file: 'palette-scraping.mp3' },
  { id: 'chair-moving', name: 'Chair Moving', file: 'chair-moving.mp3' },
  { id: 'church-bell', name: 'Church Bell', file: 'church-bell.mp3' },
  { id: 'carriage', name: 'Carriage', file: 'carriage.mp3' },
  { id: 'farm-labor', name: 'Farm Labor', file: 'farm-labor.mp3' },
  { id: 'cafe-clash', name: 'Cafe Clashing', file: 'cafe-clash.mp3' },
];

