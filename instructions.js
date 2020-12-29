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
      { mask: 0x0fff, shift: 0, type: 'A' }
    ],
  },
  {
    id: 'CALL_NNN',
    name: 'CALL',
    mask: 0xf000,
    pattern: 0x2000,
    arguments: [
      { mask: 0x0fff, shift: 0, type: 'A' }
    ],
  },
  {
    id: 'SKIP_VX_EQUALS_NN',
    name: 'SKIP',
    mask: 0xf000,
    pattern: 0x3000,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'V' },
      { mask: 0x00ff, shift: 0, type: 'C' }
    ],
  },
  {
    id: 'SKIP_VX_NOT_EQUALS_NN',
    name: 'SKIP',
    mask: 0xf000,
    pattern: 0x4000,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'V' },
      { mask: 0x00ff, shift: 0, type: 'C' }
    ],
  },
  {
    id: 'SKIP_VX_EQUALS_VY',
    name: 'SKIP',
    mask: 0xf000,
    pattern: 0x5000,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'V' },
      { mask: 0x00f0, shift: 4, type: 'V' }
    ],
  },
  {
    id: 'SET_VX_NN',
    name: 'SET',
    mask: 0xf000,
    pattern: 0x6000,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'V' },
      { mask: 0x00ff, shift: 0, type: 'C' }
    ],
  },
  {
    id: 'ADD_VX_NN',
    name: 'ADD',
    mask: 0xf000,
    pattern: 0x7000,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'V' },
      { mask: 0x00ff, shift: 0, type: 'C' }
    ],
  },
  {
    id: 'SET_VX_VY',
    name: 'SET',
    mask: 0xf00f,
    pattern: 0x8000,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'V' },
      { mask: 0x00f0, shift: 4, type: 'V' }
    ],
  },
  {
    id: 'SET_VX_OR_VY',
    name: 'SET',
    mask: 0xf00f,
    pattern: 0x8001,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'V' },
      { mask: 0x00f0, shift: 4, type: 'V' }
    ],
  },
  {
    id: 'SET_VX_AND_VY',
    name: 'SET',
    mask: 0xf00f,
    pattern: 0x8002,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'V' },
      { mask: 0x00f0, shift: 4, type: 'V' }
    ],
  },
  {
    id: 'SET_VX_XOR_VY',
    name: 'SET',
    mask: 0xf00f,
    pattern: 0x8003,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'V' },
      { mask: 0x00f0, shift: 4, type: 'V' }
    ],
  },
  {
    id: 'SET_VX_ADD_VY',
    name: 'SET',
    mask: 0xf00f,
    pattern: 0x8004,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'V' },
      { mask: 0x00f0, shift: 4, type: 'V' }
    ],
  },
  {
    id: 'SET_VX_SUB_VY',
    name: 'SET',
    mask: 0xf00f,
    pattern: 0x8005,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'V' },
      { mask: 0x00f0, shift: 4, type: 'V' }
    ],
  },
  {
    id: 'SET_VX_SHIFT_VY',
    name: 'SET',
    mask: 0xf00f,
    pattern: 0x8006,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'V' },
      { mask: 0x00f0, shift: 4, type: 'V' }
    ],
  },
  {
    id: 'SET_VY_SUB_VX',
    name: 'SET',
    mask: 0xf00f,
    pattern: 0x8007,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'V' },
      { mask: 0x00f0, shift: 4, type: 'V' }
    ],
  },
  {
    id: 'SET_VX_UNSHIFT_VY',
    name: 'SET',
    mask: 0xf00f,
    pattern: 0x800E,
    arguments: [
      { mask: 0x0f00, shift: 8, type: 'V' },
      { mask: 0x00f0, shift: 4, type: 'V' }
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