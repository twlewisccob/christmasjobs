// NEVER CHANGE THE ORDER OF THE CODE. ALWAYS REFER BACK TO THE MAIN.
//ALWAYS READ THE COMMENTS

/* ============================================================
   STEP 1 — ONE-TIME EMAILJS SETUP (free, ~5 minutes)
   1. Go to https://www.emailjs.com and create a free account.
   2. Add an Email Service (e.g. connect your Gmail) → copy its
      "Service ID" into EMAILJS_SERVICE_ID below.
   3. Create an Email Template. In the template body, use these
      variable names so they fill in correctly:
         {{to_email}}   → recipient's address
         {{job_count}}  → number of jobs selected
         {{week_of}}    → the week label
         {{job_list}}   → the formatted list of selected jobs
      Copy its "Template ID" into EMAILJS_TEMPLATE_ID below.
   4. Go to Account → General → copy your "Public Key" into
      EMAILJS_PUBLIC_KEY below. Do not put your private key here:
      browser code is public, and EmailJS private keys are for server-side use.
   5. Make sure the EmailJS template's "To Email" field uses {{to_email}}.
   ============================================================ */

const EMAILJS_SERVICE_ID  = "service_1h4cuau";
const EMAILJS_TEMPLATE_ID = "template_6qtso99";
const EMAILJS_PUBLIC_KEY  = "TkDrc5W4Wdm7IUG4T";

if (window.emailjs && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
  window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}

/* ============================================================
   STEP 2 — WEEKLY UPDATE ZONE
   Edit WEEK_OF and each major's job list every Monday.
  Each job can include applyBy as an ISO date: { title, company, link, applyBy }
   Delete last week's entries and paste in the new ones.
   ============================================================ */

/* Add Mondays Date to
const WEEK_OF ="Enter Date or text in double quotes";
Example = const WEEK_OF = "July 7, 2026";
*/

const WEEK_OF = "November 13, 2026"; 

/*
Const MAJORS contains all the braches of the jobs that CCOB has that you can apply for
Always watch out for parenthesis and square brackets
*/

const MAJORS = {
  finance: {
    label: "Finance",
    icon: "💹",
    desc: "Investment banking, corporate finance, and asset management roles.",
    jobs: [
      { title: "Finance Intern", company: "SAIC", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/e306897eb0fea25c76e5937d3c712aa4", applyBy: "November 26, 2026" },
      { title: "Finance Intern", company: "McDonald's", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/5ecff784d85c433d949c88bb630b8703", applyBy: "December 2, 2026" },
      { title: "Public Finance Intern", company: "UMB Bank", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/fe4c49403af8ae2ecaaf50a28f290805", applyBy: "November 23, 2026" },
      { title: "Raytheon Finance Intern (Spring 2027)", company: "RTX Corporation", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/653d0d98d2073dff43016e20f3ff0f07", applyBy: "November 19, 2026" },
      { title: "2027 Finance Internship Program (New York, NY)", company: "Fiserv", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/c241db9a276c842474909eb4383b3408", applyBy: "December 3, 2026" },
      { title: "San Francisco - Strategic Finance Intern - 2027", company: "Uber", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/0cbc4b5a7e8aafbb60fc1072cbf8c5a8", applyBy: "December 2, 2026" },
      { title: "2027 Summer - Program Finance Intern - Melbourne FL", company: "Leonardo DRS, Inc.", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/f53f40bbd1121bb499d416cac30a809c", applyBy: "November 24, 2026" },
      { title: "2027 Summer Intern Finance, Accounting, Tax & Treasury", company: "Regeneron Pharmaceuticals", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/31119561b43d10faaa318d6fe0161eb2", applyBy: "November 23, 2026" },
      { title: "Finance & Accounting Internship (Bachelors, Summer 2027)", company: "SanDisk", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/d52ae46bfb531eb45a882adfcc0511be", applyBy: "December 3, 2026" },
      { title: "Stanley Black & Decker Intern - Finance - Hybrid", company: "Stanley Black and Decker", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/16f477e67f602ec9916eb15d68c1d298", applyBy: "December 3, 2026" },
    ]
  },
  accounting: {
    label: "Accounting",
    icon: "📊",
    desc: "Audit, tax, and staff accounting positions at firms of every size.",
    jobs: [
      { title: "Accounting Intern", company: "Enterprise Mobility", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/3623339d92b68fe436b4e80f64876d88", applyBy: "December 2, 2026" },
      { title: "Accounting Intern", company: "Aermotive (Mesa, AZ)", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/4f375cafe5ab2128173877e1dfdf93e4", applyBy: "November 28, 2026" },
      { title: "Accounting Intern, Foodbuy Accounting Team (Charlotte, NC, Summer '27, Hybrid)", company: "Compass Group, North America", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/8857335398bf1001f2fddf035ba88831", applyBy: "November 20, 2026" },
      { title: "Accounting Internship - Summer 2027", company: "Enterprise Mobility", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/de3fce97e8882e42cb802f177cc2ee5d", applyBy: "November 24, 2026" },
      { title: "Fund Accounting Associate Analyst", company: "Citigroup", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/e667a6be6c43c39d8dd1157422db45d1", applyBy: "December 1, 2026" },
      { title: "Financial Accounting and Reporting Intern", company: "BlueCross BlueShield of Tennessee", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/344d713373b3f29f2ce924a9b91a7ae7", applyBy: "November 19, 2026" },
      { title: "Amazon Finance Rotational Program (AFRP) Accounting Intern - Summer 2027", company: "Amazon", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/9a8b5f3d5291d3c479274b1827c480b5", applyBy: "December 1, 2026" },
      { title: "Summer 2027 Internship - Phoenix, AZ - Accounting", company: "Western Alliance Bancorporation", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/ecb303f8134c164413664c2507435c7a", applyBy: "December 6, 2026" },
      { title: "Accounting Intern - New Business Team (Charlotte,NC, Summer '27, Hybrid)", company: "Compass Group, North America", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/ac82147fd0fd59a1ebef32a2eab44d06", applyBy: "November 23, 2026" },
      { title: "Accounting Intern, Strategic Analytics Team (Charlotte, NC, Summer '27, Hybrid)", company: "Compass Group, North America", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/6cdb8b9e8bb6419f75879d9b2cb9df38", applyBy: "November 23, 2026" },
    ]
  },
  economics: {
    label: "Economics",
    icon: "🌐",
    trend: "down",
    desc: "Research, policy, and consulting roles for data-driven thinkers.",
    jobs: [
      { title: "Editorial Internship (Spring Semester)", company: "Resources for the Future (RFF)", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/a2c31180e8eac30e71f35bdf1dbfe099", applyBy: "December 18, 2026" },
      { title: "Winter/ Spring 2027 Internship", company: "Groundwork Collaborative", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/7805e91c699a89818880f153a77b9c37", applyBy: "December 10, 2026" },
      { title: "Associate, Valuation Consulting", company: "Equity Methods", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/884c87a56e4e855de538164fc726aeb1", applyBy: "November 16, 2026" },
      { title: "Summer Internship Program 2027 - Market Regulation Intern", company: "Intercontinental Exchange (ICE)", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/91e6e5ec3b5d7b3148d20d69932b7df3", applyBy: "November 16, 2026" },
      { title: "Business Analyst – Life Sciences Strategy", company: "LSC Life Sciences Consulting", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/c8124e8c5a71e2271bfdccea89f1ad87", applyBy: "December 13, 2026" },
      { title: "2027 Structuring & Portfolio Management Intern - San Diego, CA", company: "Constellation", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/6fd638009ae5a989687675a5a80ea770", applyBy: "November 16, 2026" },
      { title: "Campaign Intern, Economic Education Project", company: "Hub Project", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/0d19f98d224e6b5100a3f289bfe25f4b", applyBy: "December 5, 2026" },
      { title: "Communications Intern, Economic Education Project", company: "Hub Project", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/93373a5f92a73a90c05e573c7613dbe1", applyBy: "December 5, 2026" },
      { title: "Corporate Intern - Sales Strategy & Analytics", company: "White Cap", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/32a3d34b583b5937428405d6e145b7c6", applyBy: "November 25, 2026" },
      { title: "GTM Operations & Strategy Intern", company: "Lucid Software", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/6cb7bb496884e10af7c9678e2d612dc7", applyBy: "November 30, 2026" },
    ]
  },
  marketing: {
    label: "Marketing",
    icon: "📣",
    trend: "up",
    desc: "Brand, digital, and growth marketing openings.",
    jobs: [
      { title: "Intern - Health Systems Marketing - Executive Marketing - Cambridge, MA - 2027", company: "Philips", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/09c10c7173acb5d4614133535b726281", applyBy: "December 2, 2026" },
      { title: "Marketing: Photographer/Videographer", company: "CAMP-of-the-WOODS", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/2266b023bbbe455d258c03397b3b456a", applyBy: "December 18, 2026" },
      { title: "Digital Marketing Internship", company: "Wealthy Habits", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/8d32c1404ebb1930c06ea5304861aa95", applyBy: "December 3, 2026" },
      { title: "Marketing Operations Specialist", company: "BD (Becton, Dickinson and Company)", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/0d7cfd0617e99c4b6530146215c074eb", applyBy: "November 26, 2026" },
      { title: "Marketing: Communications Admin", company: "CAMP-of-the-WOODS", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/2fd898b5802f8530c9d06f7f87c315ab", applyBy: "December 18, 2026" },
      { title: "Marketing Intern (Summer 2027)", company: "Continental Resources", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/f9a32bbcd1077b3e718ed3f108fb8392", applyBy: "November 16, 2026" },
      { title: "Marketing Events Coordinator", company: "Inland Kenworth", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/1e67fa6f24b3911d1aef57671c3f12fe", applyBy: "December 16, 2026" },
      { title: "Marketing Intern - Spring 2027", company: "WSP USA", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/250644ccc130d2b46fdf59ed3744064a", applyBy: "December 2, 2026" },
      { title: "SAP iXp Intern - Marketing Automation", company: "SAP", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/ab04ede534893ce3ab1b6a036c0dd5ba", applyBy: "November 26, 2026" },
      { title: "KOL Strategy Marketing Intern", company: "Teva Pharmaceuticals", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/fc7c535eea79ee35381224cb53948789", applyBy: "November 30, 2026" },
    ]
  },
  hr: {
    label: "Human Resources",
    icon: "🤝",
    trend: "steady",
    desc: "People operations, talent, and organizational development roles.",
    jobs: [
      { title: "Human Resources Intern", company: "Bosch", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/176b0c73c56b130d284b14d5b800b902", applyBy: "December 3, 2026" },
      { title: "Summer 2027 Human Resources Data & Analytics Internship", company: "Tradeweb", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/fee805b56494788f9c83a70003054f08", applyBy: "November 18, 2026" },
      { title: "2027 Summer Talent Programs - Human Resources Intern", company: "Butterball", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/4c77d39b8304bbf069d222779b3be04f", applyBy: "December 1, 2026" },
      { title: "2027 Summer Internship - Human Resources - HR Analytics - Virtual", company: "Freeport-McMoRan", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/de5db99ced4abaa065799c1bf0322255", applyBy: "November 25, 2026" },
      { title: "2027 Internship - Human Resources (Hoosier Racing Tire)", company: "Continental Tire", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/86ca3044e81b1b6b0b14583a6e965940", applyBy: "November 30, 2026" },
      { title: "Human Resources (HR) Talent Development Intern (6 months)", company: "Bosch", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/3f5068c4d3b9dde81aa2aa52cb924c62", applyBy: "November 20, 2026" },
      { title: "Executive Team Leader Human Resources (Assistant Manager HR) - Auburn Hills", company: "Target", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/8dffaa9294c0863ebf8c339ddbaadb80", applyBy: "November 25, 2026" },
      { title: "Human Resource Intern (Summer 2027)", company: "Sierra Nevada Corporation", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/195e7c152e1f398938ad0112b9b9bd6c", applyBy: "November 16, 2026" },
      { title: "Global Talent Programs Intern", company: "Logitech", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/d78a888251cf63e8fd4ca54c81778292", applyBy: "November 25, 2026" },
      { title: "Recruiter Development Program - Recruiting Analyst", company: "Accenture", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/23508574655ac032dd168ced91a856fb", applyBy: "November 26, 2026" },
    ]
  },
  analytics: {
    label: "Business Analytics",
    icon: "📈",
    trend: "up",
    desc: "Data and business intelligence roles across industries.",
    jobs: [
      { title: "Innovation & Technology Internship - Tech Strategy Ops & Business Analytics Summer 2027 (Undergrad)", company: "CVS Health", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/bc62b09e53ac15af00e81047ba1a1ae7", applyBy: "November 17, 2026" },
      { title: "2027 Summer Intern Data Analytics, Dashboards & Business Process Automation", company: "Regeneron Pharmaceuticals", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/dec7970cea5b33762b899c66dfcdf6d2", applyBy: "November 24, 2026" },
      { title: "Analyst Sales Analytics", company: "Nestle", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/83cf4a3e028eb37f4242779a82b06a82", applyBy: "December 1, 2026" },
      { title: "Summer 2027 UCD Reporting and Analytics Undergraduate Intern", company: "Highmark Health", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/2c3e7802d3aa4771f537fabe19c676dd", applyBy: "December 3, 2026" },
      { title: "2027 Summer Intern US Advanced Analytics Cambridge MA", company: "Sanofi", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/1f37b4420958186d77730a0a744b2a81", applyBy: "November 24, 2026" },
      { title: "Development Operations & Data Analytics Internship", company: "Bread for the World", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/388a8db4703b891eca515fb92e27a5a4", applyBy: "December 2, 2026" },
      { title: "Medicaid Data Analytics Corporate Internship - Summer 2027 (Undergraduate)", company: "CVS Health", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/6fec108913ac8a55eb0ac34e7d04c1dc", applyBy: "November 17, 2026" },
      { title: "Spring 2027 - AI & Data Analytics Intern", company: "onsemi", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/1befc24de80d8f1b5ff50c845767a0db", applyBy: "December 2, 2026" },
      { title: "2027 Summer Intern Market Access, Pricing & Commercial Analytics", company: "Regeneron Pharmaceuticals", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/a5c0c460cd5acb1db1d780721b5385c3", applyBy: "November 23, 2026" },
      { title: "Intern - Health Automation & Analytics, Provider Advisory - Campus 2027", company: "Guidehouse", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/dce9f91120aa4a3882f666e290a045c9", applyBy: "November 30, 2026" },
    ]
  },
  entrepreneurship: {
    label: "Entrepreneurship",
    icon: "🚀",
    trend: "down",
    desc: "Startup, venture, and early-stage operating roles.",
    jobs: [
      { title: "Bilingual Account Manager", company: "Luisa Samuel State Farm Agency (Phoenix, AZ)", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/0caeaca837d9517b26cd562cdcba5359", applyBy: "November 24, 2026" },
      { title: "2026 Technical Sales Intern - Services", company: "Trane Technologies", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/c7c7750fa6c2b686c9cf4809e4665030", applyBy: "November 19, 2026" },
      { title: "Intern - Sales Strategy and Operations", company: "Micron Technology, Inc.", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/0f2ee7939a51d94ccfa0b64793c59fb7", applyBy: "November 23, 2026" },
      { title: "Business Development & Operations Analyst", company: "MCE Social Capital", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/f18e49cf1cb15a167cc5b5bf02420694", applyBy: "December 20, 2026" },
      { title: "Business Development (Pursuit Enablement) Intern", company: "Maximus", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/830725176bed90712bf1d45c767acfe0", applyBy: "November 24, 2026" },
      { title: "Business Insurance Underwriting Professional Development Program (BI UPDP) Internship", company: "Travelers", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/35d69627411bbdbd1757ad0f1af1404a", applyBy: "November 23, 2026" },
      { title: "Student Trainee (Congressional & Public Affairs) - Pathways Internship", company: "Small Business Administration: Other Agencies and Independent Organizations", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/127329db2012cb792bed3aa5dab00269", applyBy: "November 18, 2026" },
      { title: "Sales Development Representative", company: "CRE OneSource, Inc.", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/ac0a34624e8b44c3df4b36516cd812bc", applyBy: "December 24, 2026" },
      { title: "AI Product & Automation Associate", company: "The Camelback", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/6a09286a95e063c89c0123ade477b68a", applyBy: "December 31, 2026" },
      { title: "Customer Experience Agent, 2027 New Grad", company: "Whatnot", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/26fa263fc5a450b9293ffb24e0877109", applyBy: "December 2, 2026" },
    ]
  },
  hospitality: {
    label: "Hospitality Mgmt",
    icon: "🏨",
    trend: "steady",
    desc: "Hotel, event, and guest-experience operations roles.",
    jobs: [
      { title: "Hospitality in Healthcare Internship", company: "FlexStaff (Northwell Health)", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/67d730f911d60fb4563739b5ce001249", applyBy: "November 24, 2026" },
      { title: "Hospitality&Catering Intern, Eurest / For Worth, TX", company: "Compass Group, North America", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/1f068b4bb9168f68baf117be40a366b9", applyBy: "November 20, 2026" },
      { title: "Full-Time Seasonal Hospitality Team Member", company: "Glen Eyrie Castle and Conference Center", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/6d81fe87bce59a0eeb2ef93d7b6953ab", applyBy: "December 8, 2026" },
      { title: "Front Office Intern - Hilton Chicago", company: "Hilton", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/da8bba354ead3f66e906d087b9c75e7b", applyBy: "December 2, 2026" },
      { title: "Dining Coordinator", company: "The Salvation Army", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/b30bad6ee915b25048f77c4bcb0d07f3", applyBy: "December 19, 2026" },
      { title: "Adventure Guide", company: "Cascades Camp & Conference Center", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/90418f9937ee224ff362369e0003a88e", applyBy: "November 29, 2026" },
      { title: "Innovative Future Collective Spring 2027 Events Internship", company: "Innovative Future Collective", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/6ea773ba8ad0477e4d5c9c192d68eebe", applyBy: "December 3, 2026" },
      { title: "Barista", company: "Cascades Camp & Conference Center", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/11aa5281c3b93d55287c6bd3688c61bf", applyBy: "November 29, 2026" },
      { title: "Summer Camp Program Staff", company: "Ross Point Camp and Conference Center", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/048cd72a7163cb9a709fd7699bf06e1d", applyBy: "December 12, 2026" },
      { title: "Projects Team Member", company: "Cascades Camp & Conference Center", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/ae3de421fafc1720a69fc93d3204e6f3", applyBy: "November 29, 2026" },
    ]
  },
  sportsManagement: {
    label: "Sports Management",
    icon: "🏟️",
    trend: "down",
    desc: "Team operations, athletic administration, and sports marketing.",
    jobs: [
      { title: "Weekend Youth Sports Instructor", company: "Beginners Edge Sports Training", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/e067d60acf29f933cfd563f9f657f32b", applyBy: "November 26, 2026" },
      { title: "Youth Sports Instructor - After School Classes", company: "Beginners Edge Sports Training", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/be0deb053b01d1ab5107c64e533f0837", applyBy: "November 26, 2026" },
      { title: "Flag Football Instructor/Ref", company: "i9 Sports", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/28f958c3f37830f4aab9105b80dbad52", applyBy: "November 20, 2026" },
      { title: "Soccer Instructor/Ref", company: "i9 Sports", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/a932e9f6e6f2a5c6274af763ed86a015", applyBy: "November 20, 2026" },
      { title: "Volleyball Instructor/Ref", company: "i9 Sports", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/a7ae8975acdbb9b52851df6aeb3264ef", applyBy: "November 20, 2026" },
      { title: "Youth Baseball Instructor", company: "i9 Sports", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/1c5b7cb9acffe767b6811a3e759105d6", applyBy: "November 20, 2026" },
      { title: "Sports Journalism Intern - Spring 2027", company: "Notre Dame Preparatory High School", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/2cb3c7d9096b9652cfaac32289168b26", applyBy: "December 13, 2026" },
      { title: "NBC Sports Bay Area & California - Sales & Digital Media Intern - Summer 2027", company: "NBC Universal", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/3b8c4cba702d7f7336205573f051c009", applyBy: "November 30, 2026" },
      { title: "Spring - Graphic Design Intern", company: "Ability360 Sports", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/4a1b4c8d476aa25201093a05340eb0f4", applyBy: "December 13, 2026" },
      { title: "Marketing Sales Agents", company: "Sports Illustrated Resorts - Icon Park (Travel + Leisure Co.)", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/29366a9fb0237d786abae0c54bc141b3", applyBy: "November 26, 2026" },
    ]
  },
  supplyChain: {
    label: "Supply Chain",
    icon: "📦",
    trend: "up",
    desc: "Logistics, procurement, and operations analyst roles.",
    jobs: [
      { title: "Distribution Engineer", company: "Pilot Thomas Logistics", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/0239ecd930a5c43c4ea00783afd74d75", applyBy: "November 19, 2026" },
      { title: "Supply Chain Planning Intern", company: "ZF", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/adc64e432b2b7e13dfd197b76b290ec6", applyBy: "November 23, 2026" },
      { title: "Supply Chain-Business Modernization Intern", company: "Lockheed Martin", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/cfd57137f8d44861595069ebb7a57277", applyBy: "November 20, 2026" },
      { title: "Supply Chain Intern", company: "Lockheed Martin", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/79adfc128a46d4f3be4a084a703265ed", applyBy: "December 2, 2026" },
      { title: "Summer 2027 Global Supply Chain Internship", company: "Walmart", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/bca8e1c485abf3625e5fcf396a08f5a7", applyBy: "November 30, 2026" },
      { title: "Supply Chain Analyst (Value Engineering) - Intern", company: "Lockheed Martin", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/80b488bd0cdb54fa538435bfecfa8463", applyBy: "December 3, 2026" },
      { title: "Supply Chain Intern II, Summer 2027", company: "BAE Systems", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/0926897391ef4e8fee208333c03c19ac", applyBy: "November 16, 2026" },
      { title: "Supply Chain Intern III (Summer 2027) - Wayne, NJ", company: "BAE Systems", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/d560e24e7b85ad21413e35918513a3b4", applyBy: "November 24, 2026" },
      { title: "Supply Chain & Operations Internship Program (Spring & Summer 2027)", company: "Copeland", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/3d42014585c6d59cb43e4205be6a7345", applyBy: "December 3, 2026" },
      { title: "2027 Supply Chain Intern - HYBRID/Baltimore MD/Redondo Beach CA", company: "Northrop Grumman", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/672431e9d31f51417a0946f21415a137", applyBy: "November 20, 2026" },
    ]
  },
  businessManagement: {
    label: "Business Mgmt",
    icon: "🧭",
    trend: "steady",
    desc: "Generalist operations, project, and management-track roles.",
    jobs: [
      { title: "2027 Business Management Intern - Cincinnati OH", company: "Northrop Grumman", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/fadc551dfd9d37242746c8cbe914ba05", applyBy: "November 23, 2026" },
      { title: "Business Program Management INTERN (CO+I Exec)", company: "Microsoft Corporation", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/6c82c6ab0e9fbd89f49fd35d951de0ed", applyBy: "November 24, 2026" },
      { title: "Summer 2027 Enterprise Architecture Business Operations/Project Management enGen Undergraduate Internship", company: "Highmark Health", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/221230f6ae804b26ae4ede4148488008", applyBy: "November 24, 2026" },
      { title: "Sales Management Trainee", company: "Enterprise Mobility", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/b90e9f6ef9f8d373adcec5d069f72fa6", applyBy: "November 26, 2026" },
      { title: "Business Systems Analyst Consultant", company: "PNC", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/fa2d90a8c25620f9dcf28981fbd38d9c", applyBy: "November 25, 2026" },
      { title: "Brokerage Management Consultant", company: "Accenture", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/6934c02153eb9cf9756477e15ed10854", applyBy: "November 25, 2026" },
      { title: "Project Management Intern", company: "Leidos", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/eb8005070f77b9e968ce2f195a5d5387", applyBy: "November 23, 2026" },
      { title: "2026 Management & Sales Training Program", company: "Sherwin-Williams", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/99c0902f298fab7dc03c7663d53c0c58", applyBy: "November 28, 2026" },
      { title: "Summer 2027 Delivery Management Undergraduate Intern", company: "Highmark Health", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/7b515bf35d1f31be5d7b09706536f788", applyBy: "November 18, 2026" },
      { title: "Sales and Business Leadership Intern", company: "Consolidated Electrical Distributors", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/eab001fa535b2dd2c9c27c2dcdd36f75", applyBy: "November 26, 2026" },
    ]
  },
};
/* normalize job links need not be touched unless of an exception of a non working link*/


// Ensure each job has a working link (fallback to a Google search URL)
(function normalizeJobLinks() {
  Object.values(MAJORS).forEach((m) => {
    m.jobs.forEach((job) => {
      if (!job.link || job.link === "#") {
        const q = encodeURIComponent((job.title || "job") + " " + (job.company || ""));
        job.link = `https://www.google.com/search?q=${q}`;
      } else if (/^[^/:]+$/.test(job.link)) {
        // if link is like 'www.google.com', add protocol
        job.link = `https://${job.link}`;
      }
    });
  });
})();

/*
!!!!!!!!!!!!!!!DO NOT TOUCH BELOW THIS PART!!!!!!!!!!!!!!!!!
*/

/* ============================================================
   RENDER + SELECTION LOGIC — no need to touch below this line
   ============================================================ */

let activeMajor = Object.keys(MAJORS)[0];

// selection map keyed by "majorKey::index" → job object
const selected = new Map();
const PREVIOUS_PAGE_KEY = "jobPostingsPreviousPage";

function init() {
  rememberPreviousPage();
  buildStats();
  buildTicker();
  buildNav();
  renderPanel();
  bindSelectionBar();
  bindModal();
  bindBackButton();
}

function rememberPreviousPage() {
  const referrer = document.referrer;
  if (referrer && referrer !== window.location.href) {
    sessionStorage.setItem(PREVIOUS_PAGE_KEY, referrer);
  }
}

function goBack() {
  const storedPreviousPage = sessionStorage.getItem(PREVIOUS_PAGE_KEY);

  if (storedPreviousPage && storedPreviousPage !== window.location.href) {
    window.location.href = storedPreviousPage;
  } else if (document.referrer && document.referrer !== window.location.href) {
    window.location.href = document.referrer;
  } else if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "./";
  }
}

function bindBackButton() {
  const backBtn = document.getElementById("backBtn");
  if (!backBtn) return;

  backBtn.addEventListener("click", goBack);
}

function buildStats() {
  const majorCount = Object.keys(MAJORS).length;
  const jobCount = Object.values(MAJORS).reduce((sum, m) => sum + m.jobs.length, 0);

  document.getElementById("stat-strip").innerHTML = `
    <div class="stat-chip">
      <span class="stat-value">${jobCount}</span>
      <span class="stat-label">Open Roles</span>
    </div>
    <div class="stat-chip">
      <span class="stat-value">${majorCount}</span>
      <span class="stat-label">Departments</span>
    </div>
    <div class="stat-chip">
      <span class="stat-value">${WEEK_OF}</span>
      <span class="stat-label">Week Of</span>
    </div>
  `;
}

function buildTicker() {
  const track = document.getElementById("ticker-track");
  const trendMap = {
    up: { icon: "▲", label: "6+ openings", className: "up" },
    down: { icon: "▼", label: "0–2 openings", className: "down" },
    steady: { icon: "—", label: "3–5 openings", className: "steady" }
  };

  const items = Object.values(MAJORS).map(m => {
    const count = m.jobs.length;
    const trendKey = count > 5 ? "up" : count >= 3 ? "steady" : "down";
    const trend = trendMap[trendKey];
    return `
      <span class="ticker-item">
        <b>${m.label.toUpperCase()}</b>
        ${count} OPEN
        <span class="ticker-icon ${trend.className}" title="${trend.label}">${trend.icon}</span>
      </span>`;
  });

  track.innerHTML = items.join("") + items.join("");
}

function buildNav() {
  const nav = document.getElementById("majors-nav");
  nav.innerHTML = "";
  Object.entries(MAJORS).forEach(([key, m]) => {
    const btn = document.createElement("button");
    btn.className = "major-btn" + (key === activeMajor ? " active" : "");
    btn.innerHTML = `
      <span class="icon">${m.icon || "•"}</span>
      <span class="label">${m.label}</span>
      <span class="count">${m.jobs.length}</span>
    `;
    btn.onclick = () => {
      activeMajor = key;
      buildNav();
      renderPanel();
    };
    nav.appendChild(btn);
  });
}

function renderPanel() {
  const m = MAJORS[activeMajor];
  document.getElementById("panel-title").textContent = m.label;
  document.getElementById("panel-desc").textContent = m.desc || "";
  document.getElementById("week-chip").textContent = "Week of " + WEEK_OF;

  const list = document.getElementById("job-list");
  list.innerHTML = "";

  if (!m.jobs.length) {
    list.innerHTML = `<li class="empty-state">No roles posted for this department yet — check back next Monday.</li>`;
    return;
  }

  m.jobs.forEach((job, i) => {
    const selectionKey = activeMajor + "::" + i;
    const isChecked = selected.has(selectionKey);

    const li = document.createElement("li");
    li.innerHTML = `
      <div class="job${isChecked ? " checked" : ""}" data-key="${selectionKey}">
        <label class="job-check">
          <input type="checkbox" ${isChecked ? "checked" : ""} data-key="${selectionKey}">
          <span class="box">
            <svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#241536" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
        </label>
        <span class="job-rank">${i + 1}</span>
        <span class="job-main">
          <p class="job-title">${job.title}</p>
          <span class="job-company">${job.company || ""}</span>
        </span>
        <!-- link icon removed; job.link still present for modal/email -->
      </div>
    `;
    const deadline = document.createElement("span");
    deadline.className = "job-deadline";
    if (job.applyBy) {
      const time = document.createElement("time");
      time.dateTime = job.applyBy;
      const applyByDate = new Date(`${job.applyBy}T00:00:00`);
      time.textContent = Number.isNaN(applyByDate.getTime())
        ? job.applyBy
        : applyByDate.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
      deadline.append("Apply by: ", time);
    } else {
      deadline.textContent = "Apply by: Not listed";
    }
    li.querySelector(".job-main").appendChild(deadline);
    list.appendChild(li);
  });

  // wire up checkboxes
  list.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener("change", onCheckboxChange);
  });
}

function onCheckboxChange(e) {
  const key = e.target.dataset.key;
  const [majorKey, idx] = key.split("::");
  const job = MAJORS[majorKey].jobs[Number(idx)];
  const jobRow = e.target.closest(".job");

  if (e.target.checked) {
    selected.set(key, { ...job, majorLabel: MAJORS[majorKey].label });
    jobRow.classList.add("checked");
  } else {
    selected.delete(key);
    jobRow.classList.remove("checked");
  }

  updateSelectionBar();
}

function updateSelectionBar() {
  const bar = document.getElementById("selection-bar");
  const count = selected.size;
  document.getElementById("selected-count").textContent = count;
  document.getElementById("plural-s").textContent = count === 1 ? "" : "s";
  bar.classList.toggle("visible", count > 0);
}

function bindSelectionBar() {
  document.getElementById("email-btn").addEventListener("click", openModal);
}

function bindModal() {
  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target.id === "modal-overlay") closeModal();
  });
  document.getElementById("send-btn").addEventListener("click", sendSelectedJobs);
  document.getElementById("email-input").addEventListener("click", showEmailKeyboard);
  buildEmailKeyboard();
}

function showEmailKeyboard() {
  document.getElementById("email-keyboard").classList.add("visible");
}

let emailKeyboardShift = false;

function buildEmailKeyboard() {
  const keyboard = document.getElementById("email-keyboard");
  const rows = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["@", ".", "-", "_", "+", "!", "#", "$", "%", "&"],
    ["'", "*", "/", "=", "?", "^", "`", "{", "|", "}", "~"]
  ];

  keyboard.innerHTML = rows.map(row => `
    <div class="keyboard-row">
      ${row.map(key => {
        const displayedKey = emailKeyboardShift && /^[a-z]$/.test(key) ? key.toUpperCase() : key;
        return `<button type="button" class="keyboard-key" data-key="${displayedKey}" aria-label="${displayedKey}">${displayedKey}</button>`;
      }).join("")}
    </div>
  `).join("") + `
    <div class="keyboard-row keyboard-actions">
      <button type="button" class="keyboard-key keyboard-action" data-action="shift" aria-label="Shift">${emailKeyboardShift ? "SHIFT" : "Shift"}</button>
      <button type="button" class="keyboard-key keyboard-action" data-action="backspace" aria-label="Backspace">⌫</button>
      <button type="button" class="keyboard-key keyboard-action keyboard-clear" data-action="clear">Clear</button>
    </div>
  `;

  keyboard.onclick = (e) => {
    const keyButton = e.target.closest("button");
    if (!keyButton) return;

    const input = document.getElementById("email-input");
    const action = keyButton.dataset.action;
    if (action === "shift") {
      emailKeyboardShift = !emailKeyboardShift;
      buildEmailKeyboard();
      return;
    }
    if (action === "backspace") input.value = input.value.slice(0, -1);
    else if (action === "clear") input.value = "";
    else input.value += keyButton.dataset.key;
    if (emailKeyboardShift) {
      emailKeyboardShift = false;
      buildEmailKeyboard();
    }
    input.dispatchEvent(new Event("input", { bubbles: true }));
  };
}

function openModal() {
  const overlay = document.getElementById("modal-overlay");
  const list = document.getElementById("modal-job-list");
  const sub = document.getElementById("modal-sub");

  const jobs = Array.from(selected.values());
  sub.textContent = `We'll send the links for your ${jobs.length} selected role${jobs.length === 1 ? "" : "s"}.`;

  list.innerHTML = jobs.map(j => `
    <li>${j.title} — ${j.company}<span>${j.majorLabel} · ${j.link}</span></li>
  `).join("");

  document.getElementById("modal-status").textContent = "";
  document.getElementById("modal-status").className = "modal-status";
  document.getElementById("email-keyboard").classList.remove("visible");
  emailKeyboardShift = false;
  overlay.classList.add("visible");
}

function buildMailto(jobs, toEmail) {
  const subject = encodeURIComponent(`Job links — ${WEEK_OF}`);
  const bodyLines = jobs.map((j, i) => `${i + 1}. ${j.title} — ${j.company} (${j.majorLabel})\n${j.link}`);
  const body = encodeURIComponent(`Here are the roles you selected for ${WEEK_OF}:\n\n${bodyLines.join("\n\n")}`);
  let mailto = `mailto:${encodeURIComponent(toEmail || "")}?subject=${subject}&body=${body}`;
  return mailto;
}

function openMailClient() {
  const emailInput = document.getElementById("email-input");
  const email = emailInput.value.trim();
  const jobs = Array.from(selected.values());
  const mailto = buildMailto(jobs, email);
  // open in new window/tab to avoid navigation in single-page contexts
  window.open(mailto);
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("visible");
  document.getElementById("email-keyboard").classList.remove("visible");
}

function sendSelectedJobs() {
  const emailInput = document.getElementById("email-input");
  const status = document.getElementById("modal-status");
  const email = emailInput.value.trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    status.textContent = "Please enter a valid email address.";
    status.className = "modal-status error";
    return;
  }

  if (!window.emailjs || EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
    status.textContent = "Email sending isn't configured. Add your EmailJS public key (not the private key) in jobs-scriptw.js.";
    status.className = "modal-status error";
    return;
  }

  const jobs = Array.from(selected.values());
  if (jobs.length === 0) {
    status.textContent = "Select at least one job before sending.";
    status.className = "modal-status error";
    return;
  }

  const jobListText = jobs
    .map((j, i) => `${i + 1}. ${j.title} (${j.company}, ${j.majorLabel}) — ${j.link}`)
    .join("\n");

  const sendBtn = document.getElementById("send-btn");
  if (typeof window.emailjs.send !== "function") {
    console.error("EmailJS SDK not available or not loaded correctly.");
    status.textContent = "EmailJS SDK not loaded. Check the EmailJS script include in index.html.";
    status.className = "modal-status error";
    return;
  }

  const payload = {
    to_email: email,
    job_count: jobs.length,
    week_of: WEEK_OF,
    job_list: jobListText
  };

  sendBtn.disabled = true;
  sendBtn.textContent = "Sending...";
  status.textContent = "";
  status.className = "modal-status";

  window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, payload)
    .then((res) => {
      console.info("EmailJS send completed:", res.status, res.text);
      status.textContent = "Sent! Check your inbox for the links.";
      status.className = "modal-status success";
      sendBtn.disabled = false;
      sendBtn.textContent = "Send Links";
      setTimeout(closeModal, 1800);
    })
    .catch((err) => {
      console.error("EmailJS send error:", err);

      // Friendly, more-detailed error message for debugging — user can copy this
      let details = "";
      try {
        if (err && typeof err === "object") {
          if (err.status) details += ` Status: ${err.status}.`;
          if (err.text) details += ` Response: ${err.text}`;
          if (!details) details = " " + JSON.stringify(err);
        } else {
          details = " " + String(err);
        }
      } catch (ex) {
        details = " (error serializing error)";
      }

      status.textContent = "Something went wrong sending that email." + details;
      status.className = "modal-status error";
      sendBtn.disabled = false;
      sendBtn.textContent = "Send Links";
    });
}

init();
