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
    id: 'self-portrait-felt-hat',
    title: 'Self-Portrait with Grey Felt Hat',
    year: '1887',
    description: 'A direct and intense self-portrait from his time in Paris.',
    brushstrokeDetail: 'Short, staccato strokes demonstrating his experimentation with color.',
    image: 'https://iiif.micr.io/pMtwg/full/1280,/0/default.jpg',
    location: 'Van Gogh Museum, Amsterdam',
    locationUrl: 'https://www.vangoghmuseum.nl/',
  },
  {
    id: 'wheatfield-with-crows',
    title: 'Wheatfield with Crows',
    year: '1890',
    description: 'Considered one of his last works, it shows an ominous, stormy sky over a wheat field.',
    brushstrokeDetail: 'Turbulent, dark brushstrokes and stark color contrasts.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Korenveld_met_kraaien_-_s0149V1962_-_Van_Gogh_Museum.jpg/960px-Korenveld_met_kraaien_-_s0149V1962_-_Van_Gogh_Museum.jpg',
    location: 'Van Gogh Museum, Amsterdam',
    locationUrl: 'https://www.vangoghmuseum.nl/',
  },
  {
    id: 'self-portrait-1889',
    title: 'Self-Portrait (1889)',
    year: '1889',
    description: 'A intense self-portrait painted during his stay in Saint-Rémy.',
    brushstrokeDetail: 'Swirling, rhythmic strokes in blue and orange contrasts.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg/500px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg',
    location: 'Musée d\'Orsay, Paris',
    locationUrl: 'https://www.musee-orsay.fr/',
  },
  {
    id: 'roses',
    title: 'Roses',
    year: '1890',
    description: 'A vivid still life painting of roses.',
    brushstrokeDetail: 'Thick impasto captures the petals\' delicacy.',
    image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/436534/1447064/main-image',
    location: 'National Gallery of Art, Washington D.C.',
    locationUrl: 'https://www.nga.gov/',
  },
  {
    id: 'fishing-boats-saintes-maries',
    title: 'Fishing Boats on the Beach at Saintes-Maries',
    year: '1888',
    description: 'A study of boats parked on the textured sand.',
    brushstrokeDetail: 'Bold, thick outlines and bright, saturated colors.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Vissersboten_op_het_strand_van_Les_Saintes-Maries-de-la-Mer_-_s0028V1962_-_Van_Gogh_Museum.jpg/960px-Vissersboten_op_het_strand_van_Les_Saintes-Maries-de-la-Mer_-_s0028V1962_-_Van_Gogh_Museum.jpg',
    location: 'Van Gogh Museum, Amsterdam',
    locationUrl: 'https://www.vangoghmuseum.nl/',
  },
  {
    id: 'langlois-bridge',
    title: 'The Langlois Bridge at Arles',
    year: '1888',
    description: 'A bridge that reminded him of Dutch landscapes.',
    brushstrokeDetail: 'Crisp lines and bright colors capturing Mediterranean light.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Vincent_Van_Gogh_0014.jpg/500px-Vincent_Van_Gogh_0014.jpg',
    location: 'Rijksmuseum Kröller-Müller, Otterlo',
    locationUrl: 'https://krollermuller.nl/',
  },
  {
    id: 'garden-saint-paul',
    title: 'Garden of Saint Paul Hospital',
    year: '1889',
    description: 'The garden within the asylum walls.',
    brushstrokeDetail: 'Vibrant, rhythmic brushstrokes defining the leaves.',
    image: 'https://vggallery.com/painting/f_0660.jpg',
    location: 'Van Gogh Museum, Amsterdam',
    locationUrl: 'https://www.vangoghmuseum.nl/',
  },
  {
    id: 'portrait-patience-escalier',
    title: 'Portrait of Patience Escalier',
    year: '1888',
    description: 'A portrait of an old peasant from Arles.',
    brushstrokeDetail: 'Bold lines and deep color field.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Van_Gogh_-_Bildnis_Patience_Escalier2.jpeg/960px-Van_Gogh_-_Bildnis_Patience_Escalier2.jpeg',
    location: 'Norton Simon Museum, Pasadena',
    locationUrl: 'https://www.nortonsimon.org/',
  },
  {
    id: 'la-berceuse',
    title: 'La Berceuse',
    year: '1889',
    description: 'A portrait of Augustine Roulin, representing motherly comfort.',
    brushstrokeDetail: 'Bright color contrasts for emotional comfort.',
    image: 'https://www.artic.edu/iiif/2/6f3ca8b9-fef6-edfc-a71c-3e7b471d5f6c/full/1686,/0/default.jpg',
    location: 'MoMA, New York',
    locationUrl: 'https://www.moma.org/',
  },
  {
    id: 'vase-red-poppies',
    title: 'Vase with Red Poppies',
    year: '1886',
    description: 'A vibrant still life with poppies.',
    brushstrokeDetail: 'Delicate, almost ephemeral color application.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Van_Gogh_-_Vase_mit_rotem_Klatschmohn.jpeg/960px-Van_Gogh_-_Vase_mit_rotem_Klatschmohn.jpeg',
    location: 'Wadsworth Atheneum, Hartford',
    locationUrl: 'https://www.thewadsworth.org/',
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
  { id: 'wheat-wind', name: 'Wheat Field Wind', file: 'wheat-field-wind.mp3' },
  { id: 'field-birds', name: 'Field Birds', file: 'field-birds.mp3' },
  { id: 'insects', name: 'Distant Insects', file: 'distant-insects.mp3' },
  { id: 'palette-scraping', name: 'Palette Knife', file: 'palette-knife.mp3' },
  { id: 'chair-moving', name: 'Chair Move', file: 'chair-move.mp3' },
  { id: 'church-bell', name: 'Church Bell', file: 'church-bell.mp3' },
  { id: 'carriage', name: 'Carriage Passing', file: 'carriage-passing.mp3' },
  { id: 'farm-labor', name: 'Farmers Working', file: 'farmers-working.mp3' },
  { id: 'cafe-clash', name: 'Cafe Ambience', file: 'cafe-ambience.mp3' },
];

