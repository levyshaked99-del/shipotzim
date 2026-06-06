export const COMPANY = {
  name: 'אבני',
  tagline: 'בנייה · שיפוצים · גמר',
  phone: '03-555-0142',
  phoneHref: 'tel:+97235550142',
  email: 'info@avney.co.il',
  emailHref: 'mailto:info@avney.co.il',
} as const

export const NAV_ITEMS = [
  { label: 'פרויקטים', href: '#projects' },
  { label: 'שירותים', href: '#services' },
  { label: 'תהליך עבודה', href: '#process' },
  { label: 'המלצות', href: '#testimonials' },
  { label: 'צור קשר', href: '#contact' },
] as const

export const HERO = {
  eyebrow: 'בנייה יוקרתית · שיפוצים · עבודות גמר',
  headline: ['משפצים.', 'מעצבים.', 'ומעלים את ערך הנכס.'],
  subtext:
    'אנחנו מלווים אתכם משלב התכנון ועד למסירת המפתח, עם סטנדרט ביצוע בלתי מתפשר.',
  primaryCta: 'קבלת הצעת מחיר',
  secondaryCta: 'לצפייה בפרויקטים',
} as const

export const TRUST_STATS = [
  { value: '150+', label: 'פרויקטים שבוצעו', icon: 'projects' as const },
  { value: '12+', label: 'שנות ניסיון', icon: 'experience' as const },
  { value: '98%', label: 'לקוחות מרוצים', icon: 'satisfaction' as const },
  { value: '100%', label: 'עמידה בזמנים', icon: 'timeline' as const },
] as const

export const HERO_IMAGE = '/images/hero.png'

export const FEATURED_PROJECTS = {
  title: 'פרויקטים נבחרים',
  subtitle:
    'כל פרויקט הוא שילוב של תכנון מדויק, ביצוע קפדני וגימור ברמה הגבוהה ביותר.',
  cta: 'לצפייה בפרויקט',
} as const

export const PROJECTS = [
  {
    id: 'herzliya-villa',
    name: 'וילה הרצליה פיתוח',
    location: 'הרצליה פיתוח',
    area: '420 מ״ר',
    image:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85',
    href: '#projects',
  },
  {
    id: 'tel-aviv-penthouse',
    name: 'פנטהאוז תל אביב',
    location: 'תל אביב',
    area: '280 מ״ר',
    image:
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=85',
    href: '#projects',
  },
  {
    id: 'modiin-estate',
    name: 'אחוזת מודיעין',
    location: 'מודיעין',
    area: '550 מ״ר',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    href: '#projects',
  },
] as const

export const WORK_PROCESS = {
  title: 'תהליך העבודה',
  subtitle: 'שיטה מסודרת שמבטיחה שקיפות, עמידה בזמנים ותוצאה ברמה הגבוהה ביותר.',
  steps: [
    {
      number: '01',
      title: 'פגישת היכרות',
      description: 'הבנת הצרכים, התקציב והחזון לפרויקט.',
    },
    {
      number: '02',
      title: 'תכנון והצעת מחיר',
      description: 'בניית תוכנית עבודה מפורטת והצעת מחיר שקופה.',
    },
    {
      number: '03',
      title: 'ביצוע וניהול',
      description: 'ניהול מלא של העבודות, אנשי המקצוע והלו״ז.',
    },
    {
      number: '04',
      title: 'מסירה וגימור',
      description: 'בדיקות אחרונות ומסירת פרויקט ברמת גימור גבוהה.',
    },
  ],
} as const

export const FINAL_CTA = {
  eyebrow: 'צור קשר',
  headline: 'בואו נהפוך את החזון שלכם למציאות.',
  subheadline:
    'שיפוצים, בנייה וגמר ברמה הגבוהה ביותר. ליווי אישי משלב התכנון ועד מסירת המפתח.',
  primaryCta: 'קבלת הצעת מחיר',
  secondaryCta: 'התקשרו עכשיו',
  availability: "זמינים לשיחה בימים א'-ה'",
} as const

export const FOOTER = {
  brand: 'אבני | בנייה • שיפוצים • גמר',
  copyright: '© 2026 AVNEY',
} as const
