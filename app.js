'use strict';

/* ─── Data ───────────────────────────────────────────────────── */
const CARDS = [
  {
    id: 'lc',
    label: 'Learning Climate',
    year: 2011,
    icon: '🌱',
    accentVar: '--c0',
    description: 'The tone or atmosphere of the teaching setting — including whether it is stimulating and whether learners can comfortably identify and address their limitations.',
    note: 'Timing: initial & ongoing',
    sections: [
      {
        heading: 'Stimulation',
        items: [
          'Show enthusiasm for topic and for learners',
          'Show interest through body language',
          'Use animated voice',
          'Provide conducive physical environment',
          'Counteract natural decrement in attention',
        ],
      },
      {
        heading: 'Learner Involvement',
        items: [
          'Look at learners',
          'Listen to learners',
          'Encourage learners to participate',
          'Avoid monopolizing discussion',
        ],
      },
      {
        heading: 'Respect & Comfort',
        items: [
          'Use learners\' names',
          'Acknowledge problems/situation faced by learners',
          'Invite learners to express opinions',
          'State respect for divergent opinions',
          'Avoid ridicule, intimidation or interruption',
        ],
      },
      {
        heading: 'Admission of Limitations',
        items: [
          'Admit own errors or limitations',
          'Avoid being dogmatic',
          'Acknowledge limitations in learners',
          'Invite learners to bring up limitations',
          'Acknowledge limitations in content of medicine',
          'Acknowledge limitations in context of medical education',
        ],
      },
    ],
  },
  {
    id: 'cs',
    label: 'Control of Session',
    year: 2011,
    icon: '🎯',
    accentVar: '--c1',
    description: 'The manner in which the teaching interaction is focused and paced as influenced by the teacher\'s leadership style.',
    sections: [
      {
        heading: 'Leadership Style',
        note: 'directive · democratic · non-directive',
        items: [
          'Adapt leadership style to educational purpose',
        ],
      },
      {
        heading: 'Focus of Session',
        items: [
          'Set an agenda',
          'Discourage external interruptions',
          'Avoid digressions, keep on topic',
          'Have learners help focus session',
        ],
      },
      {
        heading: 'Pace of Session',
        items: [
          'Call attention to time',
          'Speed up or slow down discussion',
          'Allocate time to topics on agenda',
          'Have learners help pace session',
        ],
      },
    ],
  },
  {
    id: 'ur',
    label: 'Understanding & Retention',
    year: 2011,
    icon: '🧠',
    accentVar: '--c2',
    description: 'Approaches a teacher uses to (1) explain content and (2) have the learner meaningfully interact with that content — assisting the learner to understand and retain it.',
    sections: [
      {
        heading: 'Organization of Material',
        items: [
          'Use overviews and summaries',
          'Use transitions',
          'Enumerate',
          'Use advance organizers',
        ],
      },
      {
        heading: 'Clarity',
        items: [
          'Use examples (e.g., cases, self as model)',
          'Define any new terms',
          'Explain relationships in material (e.g., analogies)',
          'Avoid vague terms (e.g., "sometimes," "usually")',
          'Adequately respond to learners\' questions',
        ],
      },
      {
        heading: 'Emphasis',
        items: [
          'Vary voice quality and speed',
          'Use dramatic language and gestures',
          'Use visual aids (whiteboard, slides, simulations)',
          'Cue important points',
          'Use repetition',
        ],
      },
      {
        heading: 'Fostering Active Learning',
        items: [
          'Have learners reformulate material',
          'Encourage note-taking',
          'Provide a chance for skill practice',
          'Have learners apply material to own experience',
          'Assign/discuss literature',
          'Suggest expert consultations',
          'Ask questions to stimulate reflection',
        ],
      },
    ],
  },
  {
    id: 'cg',
    label: 'Communication of Goals',
    year: 2012,
    icon: '📋',
    accentVar: '--c3',
    description: 'The establishment and explicit expression of a teacher\'s and/or learners\' expectations for the learners.',
    note: 'Types: Ends & Means (knowledge, skills, attitudes)',
    sections: [
      {
        heading: 'Establishment of Goals',
        items: [
          'Define goals as learner behaviors',
          'Prioritize goals',
          'Re-establish goals (define over time)',
        ],
      },
      {
        heading: 'Expression of Goals',
        items: [
          'State goals as learner behaviors',
          'State relevance of goals to learners',
          'State expected level of competence',
          'Repeat goals periodically',
        ],
      },
      {
        heading: 'Collaboration on Goals',
        items: [
          'Check out learner\'s acceptance of teacher\'s goals',
          'Ask learners for their goals',
          'Agree on goals',
        ],
      },
    ],
  },
  {
    id: 'ev',
    label: 'Evaluation',
    year: 2015,
    icon: '🔍',
    accentVar: '--c4',
    description: 'The process by which the teacher assesses the learners\' knowledge, skills and attitudes, based on criteria related to educational goals.',
    note: 'Types: Summative & Formative',
    sections: [
      {
        heading: 'Observation of Learners',
        items: [
          'Observe learner\'s performance',
        ],
      },
      {
        heading: 'Questioning',
        custom: 'questioning',
      },
      {
        heading: 'Assessing Self-Assessment',
        items: [
          'Ask learner to self-assess',
        ],
      },
    ],
  },
  {
    id: 'fb',
    label: 'Feedback',
    year: 2016,
    icon: '💬',
    accentVar: '--c5',
    description: 'The process by which the teacher provides learners with information about their performance for the purpose of improving that performance.',
    custom: 'feedback',
  },
  {
    id: 'sdl',
    label: 'Self-Directed Learning',
    year: 2008,
    icon: '🚀',
    accentVar: '--c6',
    description: 'The form of learning initiated by the individual learner\'s needs, goals and interests. Approaches the teacher can use to influence motivation and use of resources, fostering self-directed learning.',
    sections: [
      {
        heading: 'Motivation',
        note: 'types & obstacles',
        items: [
          'Ask learners to identify goals, needs, interests',
          'Ask learners how they want to address needs',
          'Explicitly reinforce evidence of self-directed learning',
          'Use controversy/doubt/curiosity',
          'Brainstorm with learners',
          'Record topics for further consideration',
          'Provide opportunities for learners to pursue their chosen topics',
          'Model motivating SDL behaviors',
        ],
      },
      {
        heading: 'Resources',
        note: 'outside reading, consultation, computer resources',
        items: [
          'Discuss approaches to using resources for lifelong learning',
          'Inform learners about resources for lifelong learning (reading, consultation, computer resources)',
          'Model use of resources for lifelong learning',
        ],
      },
    ],
  },
];

/* ─── Custom section renderers ───────────────────────────────── */
function renderQuestioning() {
  return `
    <div class="sub-label">Forms</div>
    <ul class="behavior-list">
      <li>Open-ended questions</li>
      <li>Closed-ended questions — with adequate wait time</li>
    </ul>

    <div class="sub-label">Assessing Knowledge</div>
    <ul class="behavior-list">
      <li><strong>Fundamental (basic):</strong> Ask questions to assess foundational knowledge</li>
      <li><strong>Applied:</strong> Ask questions applied to case / clinical scenario / patient</li>
    </ul>

    <div class="sub-label">Levels of Cognition</div>
    <ul class="behavior-list">
      <li><strong>Recall:</strong> Memorization/retrieval questions</li>
      <li><strong>Analysis/Synthesis:</strong> Higher-order processing questions</li>
    </ul>

    <div class="sub-label">Assessing Skills & Attitudes</div>
    <ul class="behavior-list">
      <li>Ask questions to assess skills (simple or complex)</li>
      <li>Ask questions to assess attitudes</li>
    </ul>
  `;
}

function renderFeedbackBody() {
  return `
    <div class="section-block">
      <div class="section-heading" tabindex="0" role="button" aria-expanded="true" aria-controls="fb-char">
        <h3>Characteristics of Effective Feedback</h3>
        <svg class="section-toggle" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="section-content" id="fb-char">
        <div class="char-grid">
          <div class="char-chip">Specificity</div>
          <div class="char-chip">Learner Reaction</div>
          <div class="char-chip">Frequency</div>
          <div class="char-chip">Action Plan</div>
          <div class="char-chip">Timing</div>
          <div class="char-chip">Learning Climate</div>
          <div class="char-chip">Positive / Negative</div>
          <div class="char-chip">Communication of Goals</div>
        </div>
      </div>
    </div>

    <div class="section-block">
      <div class="section-heading" tabindex="0" role="button" aria-expanded="true" aria-controls="fb-min">
        <h3>Minimal Feedback</h3>
        <svg class="section-toggle" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="section-content" id="fb-min">
        <ul class="behavior-list">
          <li>Tell learner that performance is correct or incorrect</li>
          <li>Agree or disagree with learner's opinions</li>
          <li>Use nonverbal cues like nodding</li>
        </ul>
      </div>
    </div>

    <div class="section-block">
      <div class="section-heading" tabindex="0" role="button" aria-expanded="true" aria-controls="fb-beh">
        <h3>Behavioral Feedback</h3>
        <svg class="section-toggle" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="section-content" id="fb-beh">
        <ul class="behavior-list">
          <li>Describe learner's performance as behaviors</li>
          <li>Tell learner <em>why</em> performance is correct or incorrect</li>
          <li>Give reasons for agreement or disagreement</li>
          <li>Offer behavioral suggestions for improvement <span style="font-size:0.78rem;color:var(--text-muted)">(builds on minimal feedback)</span></li>
        </ul>
      </div>
    </div>

    <div class="section-block">
      <div class="section-heading" tabindex="0" role="button" aria-expanded="true" aria-controls="fb-int">
        <h3>Interactive Feedback</h3>
        <svg class="section-toggle" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="section-content" id="fb-int">
        <ul class="behavior-list">
          <li>Give learner feedback ↔ have learner self-assess (iterative)</li>
          <li>Have learner self-assess and give feedback on ability to self-assess</li>
          <li>Give learner feedback and elicit learner's reaction</li>
          <li>Develop an action plan with learner</li>
        </ul>
      </div>
    </div>
  `;
}

/* ─── Render helpers ─────────────────────────────────────────── */
function buildSectionHTML(section, idx) {
  const noteHTML = section.note
    ? `<span class="section-note">${section.note}</span>`
    : '';
  const contentId = `sec-${idx}`;

  let contentHTML = '';
  if (section.custom === 'questioning') {
    contentHTML = renderQuestioning();
  } else {
    contentHTML = `<ul class="behavior-list">${
      section.items.map(i => `<li>${i}</li>`).join('')
    }</ul>`;
  }

  return `
    <div class="section-block">
      <div class="section-heading" tabindex="0" role="button" aria-expanded="true" aria-controls="${contentId}">
        <h3>${section.heading}</h3>
        ${noteHTML}
        <svg class="section-toggle" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="section-content" id="${contentId}">
        ${contentHTML}
      </div>
    </div>
  `;
}

/* ─── Home screen ─────────────────────────────────────────────── */
function renderHome() {
  const list = document.querySelector('.card-list');
  list.innerHTML = CARDS.map((card, i) => `
    <button
      class="topic-card"
      data-index="${i}"
      style="--accent: var(${card.accentVar})"
      aria-label="Open ${card.label}"
      role="listitem"
    >
      <div class="card-icon">${card.icon}</div>
      <div class="card-text">
        <div class="card-label">${card.label}</div>
        <div class="card-year">Stanford FDP · ${card.year}</div>
      </div>
      <svg class="card-chevron" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M6.75 4.5L11.25 9L6.75 13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  `).join('');

  list.querySelectorAll('.topic-card').forEach(btn => {
    btn.addEventListener('click', () => openCard(+btn.dataset.index));
  });
}

/* ─── Detail screen ───────────────────────────────────────────── */
function openCard(index) {
  const card = CARDS[index];
  const accentColor = getComputedStyle(document.documentElement)
    .getPropertyValue(card.accentVar.replace('var(', '').replace(')', '')).trim();

  // Header
  const header = document.getElementById('detail-header');
  header.style.setProperty('--accent', `var(${card.accentVar})`);
  header.style.background = `var(${card.accentVar})`;
  document.getElementById('detail-title').textContent = card.label;
  document.getElementById('detail-desc').textContent = card.description;

  // Body
  const body = document.getElementById('detail-body');
  body.style.setProperty('--accent', `var(${card.accentVar})`);

  const sectionLabel = card.custom === 'feedback'
    ? 'Level of Feedback &amp; Teaching Behaviors'
    : 'Key Components &amp; Teaching Behaviors';
  const sectionHeadingHTML = `<h2 class="components-heading">${sectionLabel}</h2>`;

  if (card.custom === 'feedback') {
    body.innerHTML = sectionHeadingHTML + renderFeedbackBody();
  } else {
    body.innerHTML = sectionHeadingHTML + card.sections.map((s, i) => buildSectionHTML(s, i)).join('');
  }

  // Footer
  const noteText = card.note ? ` ${card.note}.` : '';
  document.getElementById('detail-footer').innerHTML =
    `© ${card.year} The Board of Trustees of the Leland Stanford Junior University<br>
     Stanford Faculty Development Center for Medical Teachers · Stanford University School of Medicine`;

  // Transition
  const home   = document.getElementById('home');
  const detail = document.getElementById('detail');
  home.classList.remove('active');
  detail.style.transform = 'translateX(30px)';
  detail.removeAttribute('aria-hidden');
  requestAnimationFrame(() => {
    detail.classList.add('active');
    detail.scrollTop = 0;
    window.scrollTo(0, 0);
  });

  // Back button
  document.getElementById('back-btn').onclick = closeCard;

  // Keyboard: escape
  document._escHandler = e => { if (e.key === 'Escape') closeCard(); };
  document.addEventListener('keydown', document._escHandler);

  // Collapsible sections
  body.querySelectorAll('.section-heading').forEach(heading => {
    heading.addEventListener('click', toggleSection);
    heading.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleSection.call(heading); }
    });
  });

  // History
  history.pushState({ cardIndex: index }, '', `#${card.id}`);
}

function closeCard() {
  const home   = document.getElementById('home');
  const detail = document.getElementById('detail');
  detail.classList.remove('active');
  detail.setAttribute('aria-hidden', 'true');
  home.classList.add('active');
  document.removeEventListener('keydown', document._escHandler);
  history.pushState({}, '', window.location.pathname);
}

function toggleSection() {
  const block = this.closest('.section-block');
  block.classList.toggle('collapsed');
  this.setAttribute('aria-expanded', block.classList.contains('collapsed') ? 'false' : 'true');
}

/* ─── Browser back/forward ────────────────────────────────────── */
window.addEventListener('popstate', e => {
  if (e.state && typeof e.state.cardIndex === 'number') {
    openCard(e.state.cardIndex);
  } else {
    closeCard();
  }
});

/* ─── Init ────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderHome();

  // Handle direct URL with hash
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const idx = CARDS.findIndex(c => c.id === hash);
    if (idx !== -1) openCard(idx);
  }
});

/* ─── Service Worker registration ────────────────────────────── */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
