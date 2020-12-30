const INSTRUCTION_SET = [
  {
    id: 'CLEAR_SCREEN',
    name: 'CLEAR',
    mask: 0xffff,
    pattern: 0x00e0,
    arguments: [],
  },
  {
    id: 'RETURN',
    name: 'RETURN',
    mask: 0xffff,
    pattern: 0x00ee,
    arguments: [],
  },
  {
    id: 'GOTO_NNN',
    name: 'GOTO',
    mask: 0xf000,
    pattern: 0x1000,
    arguments: [
      { mask: 0x0fff, shift: 0, type: 'NNN' }
    ],
  },
  {
    id: 'CALL_NNN',
    name: 'CALL',
    mask: 0xf000,
    pattern: 0x2000,
    arguments: [
      { mask: 0x0fff, shift: 0, type: 'NNN' }
    ],
  },
  {
    id: 'SKIP_VX_EQUALS_NN',
    name: 'SKIP',
    mask: 0xf000,
    pattern: 0x3000,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'R' },
      { mask: 0x00ff, shift: 0, type: 'NN' }
    ],
  },
  {
    id: 'SKIP_VX_NOT_EQUALS_NN',
    name: 'SKIP',
    mask: 0xf000,
    pattern: 0x4000,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'R' },
      { mask: 0x00ff, shift: 0, type: 'NN' }
    ],
  },
  {
    id: 'SKIP_VX_EQUALS_VY',
    name: 'SKIP',
    mask: 0xf000,
    pattern: 0x5000,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'R' },
      { mask: 0x00f0, shift: 4, type: 'R' }
    ],
  },
  {
    id: 'SET_VX_NN',
    name: 'SET',
    mask: 0xf000,
    pattern: 0x6000,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'R' },
      { mask: 0x00ff, shift: 0, type: 'NN' }
    ],
  },
  {
    id: 'ADD_VX_NN',
    name: 'ADD',
    mask: 0xf000,
    pattern: 0x7000,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'R' },
      { mask: 0x00ff, shift: 0, type: 'NN' }
    ],
  },
  {
    id: 'SET_VX_VY',
    name: 'SET',
    mask: 0xf00f,
    pattern: 0x8000,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'R' },
      { mask: 0x00f0, shift: 4, type: 'R' }
    ],
  },
  {
    id: 'SET_VX_OR_VY',
    name: 'SET',
    mask: 0xf00f,
    pattern: 0x8001,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'R' },
      { mask: 0x00f0, shift: 4, type: 'R' }
    ],
  },
  {
    id: 'SET_VX_AND_VY',
    name: 'SET',
    mask: 0xf00f,
    pattern: 0x8002,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'R' },
      { mask: 0x00f0, shift: 4, type: 'R' }
    ],
  },
  {
    id: 'SET_VX_XOR_VY',
    name: 'SET',
    mask: 0xf00f,
    pattern: 0x8003,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'R' },
      { mask: 0x00f0, shift: 4, type: 'R' }
    ],
  },
  {
    id: 'SET_VX_ADD_VY',
    name: 'SET',
    mask: 0xf00f,
    pattern: 0x8004,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'R' },
      { mask: 0x00f0, shift: 4, type: 'R' }
    ],
  },
  {
    id: 'SET_VX_SUB_VY',
    name: 'SET',
    mask: 0xf00f,
    pattern: 0x8005,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'R' },
      { mask: 0x00f0, shift: 4, type: 'R' }
    ],
  },
  {
    id: 'SET_VX_SHIFT_VY',
    name: 'SET',
    mask: 0xf00f,
    pattern: 0x8006,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'R' },
      { mask: 0x00f0, shift: 4, type: 'R' }
    ],
  },
  {
    id: 'SET_VY_SUB_VX',
    name: 'SET',
    mask: 0xf00f,
    pattern: 0x8007,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'R' },
      { mask: 0x00f0, shift: 4, type: 'R' }
    ],
  },
  {
    id: 'SET_VX_UNSHIFT_VY',
    name: 'SET',
    mask: 0xf00f,
    pattern: 0x800E,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'R' },
      { mask: 0x00f0, shift: 4, type: 'R' }
    ],
  },
  {
    id: 'SKIP_VX_NOT_EQUAL_VY',
    name: 'SKIP',
    mask: 0xf00f,
    pattern: 0x9000,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'R' },
      { mask: 0x00f0, shift: 4, type: 'R' }
    ],
  },
  {
    id: 'SET_I_NNN',
    name: 'SET',
    mask: 0xf000,
    pattern: 0xA000,
    arguments: [
      { mask: 0x0fff, shift: 0, type: 'NNN' }
    ],
  },
  {
    id: 'GOTO_NNN_V0',
    name: 'GOTO',
    mask: 0xf000,
    pattern: 0xB000,
    arguments: [
      { mask: 0x0fff, shift: 0, type: 'NNN' }
    ],
  },
  {
    id: 'SET_VX_RANDOM_NN',
    name: 'SET',
    mask: 0xf000,
    pattern: 0xC000,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'R' },
      { mask: 0x00ff, shift: 0, type: 'NN' }
    ],
  },
  {
    id: 'DRAW_SPRITE',
    name: 'DRAW',
    mask: 0xf000,
    pattern: 0xD000,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'R' },
      { mask: 0x00f0, shift: 4, type: 'R' },
      { mask: 0x000f, shift: 0, type: 'N' }
    ],
  },
  {
    id: 'SKIP_IF_KEY_PRESSED',
    name: 'SKIP',
    mask: 0xf0ff,
    pattern: 0xE09E,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'R' },
    ],
  },
  {
    id: 'SKIP_IF_KEY_NOT_PRESSED',
    name: 'SKIP',
    mask: 0xf0ff,
    pattern: 0xE0A1,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'R' },
    ],
  },
  {
    id: 'SET_VX_TO_DELAY_TIMER',
    name: 'SET',
    mask: 0xf0ff,
    pattern: 0xF007,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'R' },
    ],
  },
  {
    id: 'WAIT_FOR_KEY',
    name: 'WAIT',
    mask: 0xf0ff,
    pattern: 0xF00A,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'R' },
    ],
  },
  {
    id: 'SET_DELAY_TO_VX',
    name: 'SET',
    mask: 0xf0ff,
    pattern: 0xF015,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'R' },
    ],
  },
  {
    id: 'SET_SOUND_TO_VX',
    name: 'SET',
    mask: 0xf0ff,
    pattern: 0xF018,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'R' },
    ],
  },
  {
    id: 'ADD_VX_TO_I',
    name: 'SET',
    mask: 0xf0ff,
    pattern: 0xF01E,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'R' },
    ],
  },
  {
    id: 'SET_I_TO_SPRITE_VX',
    name: 'SET',
    mask: 0xf0ff,
    pattern: 0xF029,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'R' },
    ],
  },
  {
    id: 'BCD_VX',
    name: 'BCD',
    mask: 0xf0ff,
    pattern: 0xF033,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'R' },
    ],
  },
  {
    id: 'REG_DUMP',
    name: 'DUMP',
    mask: 0xf0ff,
    pattern: 0xF055,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'R' },
    ],
  },
  {
    id: 'REG_LOAD',
    name: 'LOAD',
    mask: 0xf0ff,
    pattern: 0xF065,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'R' },
    ],
  }
];

const disassemble = (opcode) => {
  const instruction = INSTRUCTION_SET.find(
    (instruction) => (opcode & instruction.mask) === instruction.pattern
  );

  const args = instruction.arguments.map(
    (arg) => (arg.mask & opcode) >> arg.shift
  )

  return { instruction, args };
};

module.exports.disassemble = disassemble;