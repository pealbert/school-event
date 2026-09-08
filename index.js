const STORAGE_KEY = 'event-registration-selection-v1';

const programs = [
	{
		id: 'media-literacy',
		title: 'Média, fakta a svobodná diskuse',
		description: 'Praktický workshop o ověřování informací, práci se zdroji a rozpoznávání manipulativního obsahu.',
		room: 'A101',
		blocks: [1],
		type: 'Workshop',
	},
	{
		id: 'modern-history',
		title: 'Zlomové okamžiky moderních dějin',
		description: 'Interaktivní přednáška o událostech, které ovlivnily podobu současné demokratické společnosti.',
		room: 'B204',
		blocks: [1],
		type: 'Přednáška',
	},
	{
		id: 'civic-society',
		title: 'Jak funguje občanská společnost',
		description: 'Diskuse o tom, jak se mohou studenti zapojit do veřejného dění a proměňovat své okolí.',
		room: 'A205',
		blocks: [1],
		type: 'Diskuse',
	},
	{
		id: 'economy-society',
		title: 'Ekonomika a společenské změny',
		description: 'Srozumitelný pohled na vztah institucí, ekonomiky a každodenního života.',
		room: 'B110',
		blocks: [1],
		type: 'Přednáška',
	},
	{
		id: 'democracy-lab',
		title: 'Laboratoř demokracie',
		description: 'Týmová simulace rozhodování, ve které si účastníci vyzkoušejí argumentaci, kompromis a hlasování.',
		room: 'A301',
		blocks: [2],
		type: 'Simulace',
	},
	{
		id: 'freedom-stories',
		title: 'Příběhy svobody',
		description: 'Práce s anonymizovanými dobovými svědectvími a otázkami osobní odpovědnosti.',
		room: 'B208',
		blocks: [2],
		type: 'Seminář',
	},
	{
		id: 'public-space',
		title: 'Veřejný prostor kolem nás',
		description: 'Workshop zaměřený na návrh drobné, realistické změny ve škole nebo sousedství.',
		room: 'A206',
		blocks: [2],
		type: 'Workshop',
	},
	{
		id: 'digital-citizenship',
		title: 'Digitální občanství',
		description: 'Jak se bezpečně a zodpovědně pohybovat online, chránit soukromí a vést věcnou debatu.',
		room: 'B302',
		blocks: [2],
		type: 'Workshop',
	},
];

const programList = document.querySelector('#program-list');
const summary = document.querySelector('#selection-summary');
const registrationForm = document.querySelector('#registration-form');
const submitButton = document.querySelector('#submit-selection');
const resetButton = document.querySelector('#reset-selection');
const formStatus = document.querySelector('#form-status');
const filterButtons = [...document.querySelectorAll('[data-filter]')];

let selection = loadSelection();
let activeFilter = 'all';

function loadSelection() {
	try {
		const savedValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
		if (!Array.isArray(savedValue)) return [];

		return savedValue.reduce((validSelection, id) => {
			const program = programs.find((item) => item.id === id);
			const overlapsExistingBlock = program?.blocks.some((block) =>
				validSelection.some((selectedId) =>
					programs.find((item) => item.id === selectedId)?.blocks.includes(block),
				),
			);

			if (program && !overlapsExistingBlock) validSelection.push(id);
			return validSelection;
		}, []);
	} catch {
		return [];
	}
}

function saveSelection() {
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(selection));
		return true;
	} catch {
		return false;
	}
}

function clearSavedSelection() {
	try {
		localStorage.removeItem(STORAGE_KEY);
	} catch {
		// The in-memory selection still works when browser storage is unavailable.
	}
}

function getSelectedProgramForBlock(block) {
	return programs.find((program) => selection.includes(program.id) && program.blocks.includes(block));
}

function isSelectionComplete() {
	return Boolean(getSelectedProgramForBlock(1) && getSelectedProgramForBlock(2));
}

function selectProgram(program) {
	const nextSelection = selection.filter((selectedId) => {
		const selectedProgram = programs.find(({ id }) => id === selectedId);
		return selectedProgram && !selectedProgram.blocks.some((block) => program.blocks.includes(block));
	});

	selection = selection.includes(program.id) ? nextSelection : [...nextSelection, program.id];
	formStatus.textContent = '';
	saveSelection();
	render();
}

function createProgramCard(program) {
	const article = document.createElement('article');
	article.className = 'program-card';
	article.hidden = activeFilter !== 'all' && !program.blocks.includes(Number(activeFilter));

	const selected = selection.includes(program.id);
	article.innerHTML = `
		<div class="program-card__meta">
			<span>${program.type}</span>
			<span>${program.blocks.map((block) => `Blok ${block}`).join(' + ')}</span>
		</div>
		<h3>${program.title}</h3>
		<p>${program.description}</p>
		<div class="program-card__footer">
			<span class="room">Místnost ${program.room}</span>
			<button class="select-button${selected ? ' is-selected' : ''}" type="button" aria-pressed="${selected}">
				${selected ? 'Vybráno' : 'Vybrat'}
			</button>
		</div>
	`;

	article.querySelector('button').addEventListener('click', () => selectProgram(program));
	return article;
}

function renderPrograms() {
	programList.replaceChildren(...programs.map(createProgramCard));
}

function createSummaryItem(block) {
	const program = getSelectedProgramForBlock(block);
	const item = document.createElement('div');
	item.className = `selection-item${program ? ' is-filled' : ''}`;

	const label = document.createElement('span');
	label.textContent = `Blok ${block}`;

	const value = document.createElement('strong');
	value.textContent = program ? `${program.title} · ${program.room}` : 'Zatím nevybráno';

	item.append(label, value);
	return item;
}

function renderSummary() {
	summary.replaceChildren(createSummaryItem(1), createSummaryItem(2));
	submitButton.disabled = !isSelectionComplete();
	resetButton.disabled = selection.length === 0;
}

function render() {
	renderPrograms();
	renderSummary();
}

filterButtons.forEach((button) => {
	button.addEventListener('click', () => {
		activeFilter = button.dataset.filter;
		filterButtons.forEach((filterButton) => {
			const isActive = filterButton === button;
			filterButton.classList.toggle('is-active', isActive);
			filterButton.setAttribute('aria-pressed', String(isActive));
		});
		renderPrograms();
	});
});

registrationForm.addEventListener('submit', (event) => {
	event.preventDefault();
	if (!isSelectionComplete()) {
		formStatus.textContent = 'Nejdříve vyber jeden program pro každý blok.';
		return;
	}

	const saved = saveSelection();
	formStatus.textContent = saved
		? 'Výběr je uložený v tomto prohlížeči. Žádná data nebyla odeslána.'
		: 'Výběr je potvrzený pro tuto relaci. Úložiště prohlížeče není dostupné.';
});

resetButton.addEventListener('click', () => {
	selection = [];
	clearSavedSelection();
	formStatus.textContent = 'Výběr byl vymazán.';
	render();
});

render();
