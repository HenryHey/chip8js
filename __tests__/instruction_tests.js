const { expect } = require('@jest/globals');
const inst = require('../instructions');

describe('Instruction tests', () => {

  it ('Disassembles CLEAR opcode', () => {
    const result = inst.disassemble(0x00e0);

    expect(result.instruction).not.toBeNull();
    expect(result.instruction.id).toBe('CLEAR_SCREEN');

    expect(result.args).toHaveLength(0);
  });

  it ('Disassembles RETURN opcode', () => {
    const result = inst.disassemble(0x00EE);

    expect(result.instruction.id).toBe('RETURN');
    expect(result.args).toHaveLength(0);
  });

});