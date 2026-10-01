export type Block = 1 | 2;

export type Program = {
	readonly blocks: readonly Block[];
	readonly description: string;
	readonly id: string;
	readonly room: string;
	readonly title: string;
	readonly type: string;
};

export type ProgramFilter = "all" | `${Block}`;

export type SelectedPrograms = Record<Block, Program | undefined>;
