let id = 0

export default {
  Over: {
    id: String(id++),
    href: 'about',
    descriptions: 'Leer meer over John\'s vaardigheden en workflow',
  },
  Portfolio: {
    id: String(id++),
    href: '/',
    descriptions: 'Bekijk John\'s web development werk',
  },
  Testimonium: {
    id: String(id++),
    href: 'testimonials',
    descriptions: 'Lees de aanbevelingen van de klant',
  },
  Artikelen: {
    id: String(id++),
    href: 'blog',
    descriptions: 'Lees web-gerelateerde artikelen, adviezen en tutorials',
  },
  Contact: {
    id: String(id++),
    href: 'contact',
    descriptions: 'Stuur een algemeen bericht',
  },
  'Huur John': {
    id: String(id++),
    href: 'hire',
    descriptions: 'Informeer over het huren van John',
  },
}
