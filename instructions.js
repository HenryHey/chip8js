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
  }
];

const disassemble = (opcode) => {
  const instruction = INSTRUCTION_SET.find(
    (instruction) => (opcode & instruction.mask) === instruction.pattern
  );

  const args = [];

  return { instruction, args };
};

module.exports.disassemble = disassemble;