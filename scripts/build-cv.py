"""Rebuild the portfolio's CV with Python and reportlab: python scripts/build-cv.py."""
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether, Frame
from reportlab.pdfgen import canvas

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'public' / 'Tadiwanashe_Joshua_Mabharani_CV.pdf'
INK = colors.HexColor('#182536')
BLUE = colors.HexColor('#164e81')
MUTED = colors.HexColor('#475569')
styles = {
    'name': ParagraphStyle('name', fontName='Helvetica-Bold', fontSize=22, leading=27, textColor=INK, spaceAfter=6),
    'role': ParagraphStyle('role', fontName='Helvetica-Bold', fontSize=12, leading=16, textColor=BLUE, spaceAfter=8),
    'contact': ParagraphStyle('contact', fontName='Helvetica', fontSize=9, leading=14, textColor=MUTED),
    'section': ParagraphStyle('section', fontName='Helvetica-Bold', fontSize=10, leading=14, textColor=BLUE, spaceBefore=17, spaceAfter=8),
    'title': ParagraphStyle('title', fontName='Helvetica-Bold', fontSize=10.5, leading=14, textColor=INK, spaceAfter=3),
    'meta': ParagraphStyle('meta', fontName='Helvetica', fontSize=9, leading=13, textColor=MUTED, spaceAfter=5),
    'body': ParagraphStyle('body', fontName='Helvetica', fontSize=10, leading=14.5, textColor=INK, spaceAfter=6, alignment=TA_LEFT),
    'bullet': ParagraphStyle('bullet', fontName='Helvetica', fontSize=10, leading=14.5, textColor=INK, leftIndent=11, firstLineIndent=-8, spaceAfter=4),
}
story = []
def p(text, style='body'):
    return Paragraph(text, styles[style])
def add(text, style='body'):
    story.append(p(text, style))
def section(title):
    add(title.upper(), 'section')
def entry(title, meta, bullets):
    content = [p(title, 'title'), p(meta, 'meta')]
    content.extend(p('- ' + line, 'bullet') for line in bullets)
    content.append(Spacer(1, 7))
    story.append(KeepTogether(content))
def link(label, url):
    return f'<link href="{url}" color="#164e81"><u>{label}</u></link>'

add('Tadiwanashe Joshua Mabharani', 'name')
add('SOFTWARE DEVELOPER', 'role')
add('Harare, Zimbabwe | ' + link('Big21josh@gmail.com', 'mailto:Big21josh@gmail.com'), 'contact')
add(link('Portfolio: tadiwanashejoshuamabharani.onrender.com', 'https://tadiwanashejoshuamabharani.onrender.com/'), 'contact')
add(link('GitHub: github.com/big21josh', 'https://github.com/big21josh') + ' | ' + link('LinkedIn', 'https://www.linkedin.com/in/tadiwanashe-joshua-mabharani-001084346/'), 'contact')

section('Profile')
add('Harare-based software developer currently studying Software Engineering at Uncommon.org. Practical project experience with responsive interfaces, backend services, authentication, databases, and deployment. Combines JavaScript and Python development with product design, coding instruction, and client-facing technical support.')

section('Technical skills')
add('<b>Languages:</b> JavaScript, TypeScript, Python, HTML, CSS')
add('<b>Frontend:</b> React, Next.js, Tailwind CSS, Bootstrap, responsive web design')
add('<b>Backend and data:</b> Node.js, Django, SQLite, PostgreSQL, Supabase, Firebase Authentication, Firestore, Cloudinary')
add('<b>Tools and delivery:</b> Git, GitHub, npm, Vite, ESLint, Prettier, Vercel, Render')
add('<b>Interactive experiences:</b> Three.js/WebGL, GSAP; UI/UX design and troubleshooting')

section('Selected projects')
entry('Shalom Chigama Portfolio | Full-stack web application', 'JavaScript, Node.js, Firebase, Firestore, Cloudinary, WebGL | 2026', [
    'Developed a responsive artwork catalogue with an interactive WebGL gallery and an authenticated content-management studio.',
    'Implemented owner/editor access, Firestore project data, and a Node.js API for role verification and signed Cloudinary uploads.',
    link('Live website', 'https://shalom-chigama.vercel.app/'),
])
entry('Muwoni Task Manager | Task management application', 'Python, Django, SQLite, Bootstrap | 2026', [
    'Built task creation, editing, and deletion using Django models and views, with calendar scheduling and a responsive interface.',
    'Deployed the application on Render.',
    link('GitHub repository', 'https://github.com/big21josh/muwoni-completed-project') + ' | ' + link('Live website', 'https://muwoni-completed-project.onrender.com/'),
])
entry('Personal Developer Portfolio | Interactive project showcase', 'React, Three.js/WebGL, GSAP, Lenis | 2026', [
    'Adapted a Visuvate design reference to showcase personal projects with actual screenshots, searchable case studies, and certificates.',
    'Refined section-aware navigation, light/dark themes, modal scrolling, metadata, and reduced-motion support.',
])

story.append(PageBreak())
add('Tadiwanashe Joshua Mabharani', 'title')
add('Software Developer | Experience, education and certifications', 'meta')

section('Professional experience')
entry('Youth Coding Instructor | Uncommon.org Youth Coding', 'January 2026 - Present', [
    'Teach coding fundamentals and mentor young learners through programming, problem-solving, and product design lessons.',
    'Develop beginner-friendly learning content and support youth engagement.',
])
entry('Business Management Systems Specialist | Classic Technology', '2023 - 2025', [
    'Provided business management and point-of-sale software, including installation, client onboarding, and ongoing technical support.',
    'Supported retail technology integration and business workflows.',
])
entry('CCTV Installation Technician | Muwoni Technologies', '2023 - 2025', [
    'Installed and maintained CCTV, networking, and security hardware.',
    'Troubleshot systems and trained clients on security-system usage.',
])

section('Education')
entry('Software Engineering | Uncommon.org', 'January 2026 - Present', [
    'Ongoing software engineering training alongside practical web development projects.',
])
add('Secondary School | Rujeko High School', 'title')
add('2016 - 2019', 'meta')

section('Selected certifications')
add('<b>Introduction to Software Engineering</b> | IBM / Coursera | August 2026')
add('<b>React Basics</b> | Meta / Coursera | July 2026')
add('<b>Crash Course on Python</b> | Google / Coursera | July 2026')
add('<b>Inbound Certified</b> | HubSpot | May 2026')
add('<b>Product Designer</b> | Uxcel | March 2026')
add('<b>Additional Uxcel learning:</b> UX Design Foundations, Advanced UI Components, Core UI Components, Typography, Design Terminology, Leadership Mastery, and AI Prompts Foundations.')

def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor('#d9e1eb'))
    canvas.line(44, 38, A4[0] - 44, 38)
    canvas.setFont('Helvetica', 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(44, 25, 'Tadiwanashe Joshua Mabharani | Software Developer')
    canvas.drawRightString(A4[0] - 44, 25, f'{doc.page}')
    canvas.restoreState()

# Retain the original CV's large letter-spaced heading and rounded sidebar.
# Updated content is grouped into the same two-column structure, now in blue.
sections = {}
current = None
for item in story:
    if isinstance(item, PageBreak):
        current = None
    elif isinstance(item, Paragraph) and item.style.name == 'section':
        current = item.getPlainText()
        sections[current] = [item]
    elif current:
        sections[current].append(item)

W, H = A4
c = canvas.Canvas(str(OUTPUT), pagesize=A4)
c.setTitle('Tadiwanashe Joshua Mabharani - Software Developer CV')
c.setAuthor('Tadiwanashe Joshua Mabharani')

def spaced(text, y, size, spacing):
    c.saveState()
    width = c.stringWidth(text, 'Helvetica-Bold', size) + spacing * (len(text) - 1)
    t = c.beginText((W - width) / 2, y)
    t.setFont('Helvetica-Bold', size)
    t.setCharSpace(spacing)
    t.setFillColor(colors.HexColor('#454b50'))
    t.textLine(text)
    c.drawText(t)
    c.restoreState()

def frame_content(items, x, width, sidebar=False):
    def restyle(item):
        if isinstance(item, Paragraph):
            style = ParagraphStyle('column', parent=item.style)
            style.textColor = colors.HexColor('#525c65')
            style.fontSize = min(style.fontSize, 9 if sidebar else 9.5)
            style.leading = style.fontSize * 1.4
            style.spaceAfter = min(style.spaceAfter, 5)
            if item.style.name == 'section':
                style.fontSize = 10
                style.leading = 14
                style.spaceBefore = 12
                style.spaceAfter = 10
                style.textColor = colors.HexColor('#454b50')
            return Paragraph(item.text, style)
        if isinstance(item, KeepTogether):
            return KeepTogether([restyle(child) for child in item._content])
        return item
    content = []
    for item in items:
        if isinstance(item, KeepTogether):
            content.extend(restyle(child) for child in item._content)
        else:
            content.append(restyle(item))
    frame = Frame(x, 40, width, H - 203, leftPadding=0, rightPadding=0,
                  topPadding=0, bottomPadding=0)
    frame.addFromList(content, c)
    assert not content, f'CV column overflow: {x}, {len(content)} items'

for page in [1, 2]:
    spaced('TADIWANASHE', H - 56, 29, 5.4)
    spaced('JOSHUA MABHARANI', H - 99, 29, 4.5)
    spaced('SOFTWARE DEVELOPER', H - 127, 14, 3.8)
    c.setFillColor(colors.HexColor('#e8f0f8'))
    c.roundRect(26, 27, 216, H - 173, 13, fill=1, stroke=0)
    if page == 1:
        sidebar = [p('CONTACT', 'section'),
                   p(link('Big21josh@gmail.com', 'mailto:Big21josh@gmail.com')),
                   p('Harare, Zimbabwe'),
                   p(link('Portfolio', 'https://tadiwanashejoshuamabharani.onrender.com/')),
                   p(link('GitHub / big21josh', 'https://github.com/big21josh')),
                   p(link('LinkedIn', 'https://www.linkedin.com/in/tadiwanashe-joshua-mabharani-001084346/'))]
        sidebar += [p('EDUCATION', 'section'),
                    p('<b>SOFTWARE ENGINEERING</b><br/>Uncommon.org<br/>Jan 2026 - Present'),
                    Spacer(1, 8),
                    p('<b>SECONDARY SCHOOL</b><br/>Rujeko High School<br/>2016 - 2019'),
                    p('TECHNICAL SKILLS', 'section')]
        for line in ['JavaScript, TypeScript, Python', 'HTML, CSS, responsive design',
                     'React, Next.js, Tailwind CSS', 'Node.js, Django, Bootstrap',
                     'SQLite, PostgreSQL, Supabase', 'Firebase, Firestore, Cloudinary',
                     'Git, GitHub, npm, Vite', 'ESLint, Prettier, Vercel, Render',
                     'Three.js/WebGL, GSAP, Lenis', 'UI/UX and troubleshooting']:
            sidebar.append(p(line))
        main = sections['PROFILE'] + sections['PROFESSIONAL EXPERIENCE']
    else:
        sidebar = sections['SELECTED CERTIFICATIONS']
        main = sections['SELECTED PROJECTS']
    frame_content(sidebar, 49, 169, sidebar=True)
    frame_content(main, 257, 308)
    c.setFillColor(colors.HexColor('#525c65'))
    c.setFont('Helvetica', 8)
    c.drawRightString(W - 29, 16, f'{page} / 2')
    c.showPage()
c.save()
print(OUTPUT)
