const { expect } = require('@jest/globals');
const inst = require('../instructions');

describe('Instruction tests', () => {

  it ('Disassembles CLEAR_SCREEN opcode (00e0)', () => {
    const result = inst.disassemble(0x00e0);

    expect(result.instruction.id).toBe('CLEAR_SCREEN');
    expect(result.args).toHaveLength(0);
  });

  it ('Disassembles RETURN opcode (00ee)', () => {
    const result = inst.disassemble(0x00EE);

    expect(result.instruction.id).toBe('RETURN');
    expect(result.args).toHaveLength(0);
  });

  it ('Disassembles GOTO_NNN opcode (1NNN)', () => {
    const result = inst.disassemble(0x1000);

    expect(result.instruction.id).toBe('GOTO_NNN');
    expect(result.args[0]).toBe(0x0);
  });

  it ('Disassembles CALL_NNN opcode (2NNN)', () => {
    const result = inst.disassemble(0x2000);

    expect(result.instruction.id).toBe('CALL_NNN');
    expect(result.args[0]).toBe(0x0);
  });

  it ('Disassembles SKIP_VX_EQUALS_NN opcode (3XNN)', () => {
    const result = inst.disassemble(0x3A22);

    expect(result.instruction.id).toBe('SKIP_VX_EQUALS_NN');
    expect(result.args[0]).toBe(0xA);
    expect(result.args[1]).toBe(0x22);
  });

  it ('Disassembles SKIP_VX_NOT_EQUALS_NN opcode (4XNN)', () => {
    const result = inst.disassemble(0x4A22);

    expect(result.instruction.id).toBe('SKIP_VX_NOT_EQUALS_NN');
    expect(result.args[0]).toBe(0xA);
    expect(result.args[1]).toBe(0x22);
  });

  it ('Disassembles SKIP_VX_EQUALS_VY opcode (5XY0)', () => {
    const result = inst.disassemble(0x5A20);

    expect(result.instruction.id).toBe('SKIP_VX_EQUALS_VY');
    expect(result.args[0]).toBe(0xA);
    expect(result.args[1]).toBe(0x2);
  });

  it ('Disassembles SET_VX_NN opcode (6XNN)', () => {
    const result = inst.disassemble(0x6A22);

    expect(result.instruction.id).toBe('SET_VX_NN');
    expect(result.args[0]).toBe(0xA);
    expect(result.args[1]).toBe(0x22);
  });

  it ('Disassembles ADD_VX_NN opcode (7XNN)', () => {
    const result = inst.disassemble(0x7A22);

    expect(result.instruction.id).toBe('ADD_VX_NN');
    expect(result.args[0]).toBe(0xA);
    expect(result.args[1]).toBe(0x22);
  });

  it ('Disassembles SET_VX_VY opcode (8XY0)', () => {
    const result = inst.disassemble(0x81A0);

    expect(result.instruction.id).toBe('SET_VX_VY');
    expect(result.args[0]).toBe(0x1);
    expect(result.args[1]).toBe(0xA);
  });

  it ('Disassembles SET_VX_OR_VY opcode (8XY1)', () => {
    const result = inst.disassemble(0x81A1);

    expect(result.instruction.id).toBe('SET_VX_OR_VY');
    expect(result.args[0]).toBe(0x1);
    expect(result.args[1]).toBe(0xA);
  });

  it ('Disassembles SET_VX_AND_VY opcode (8XY2)', () => {
    const result = inst.disassemble(0x81A2);

    expect(result.instruction.id).toBe('SET_VX_AND_VY');
    expect(result.args[0]).toBe(0x1);
    expect(result.args[1]).toBe(0xA);
  });

  it ('Disassembles SET_VX_XOR_VY opcode (8XY3)', () => {
    const result = inst.disassemble(0x81A3);

    expect(result.instruction.id).toBe('SET_VX_XOR_VY');
    expect(result.args[0]).toBe(0x1);
    expect(result.args[1]).toBe(0xA);
  });

  it ('Disassembles SET_VX_ADD_VY opcode (8XY4)', () => {
    const result = inst.disassemble(0x81A4);

    expect(result.instruction.id).toBe('SET_VX_ADD_VY');
    expect(result.args[0]).toBe(0x1);
    expect(result.args[1]).toBe(0xA);
  });

  it ('Disassembles SET_VX_SUB_VY opcode (8XY5)', () => {
    const result = inst.disassemble(0x81A5);

    expect(result.instruction.id).toBe('SET_VX_SUB_VY');
    expect(result.args[0]).toBe(0x1);
    expect(result.args[1]).toBe(0xA);
  });

  it ('Disassembles SET_VX_SHIFT_VY opcode (8XY6)', () => {
    const result = inst.disassemble(0x81A6);

    expect(result.instruction.id).toBe('SET_VX_SHIFT_VY');
    expect(result.args[0]).toBe(0x1);
    expect(result.args[1]).toBe(0xA);
  });

  it ('Disassembles SET_VY_SUB_VX opcode (8XY7)', () => {
    const result = inst.disassemble(0x81A7);

    expect(result.instruction.id).toBe('SET_VY_SUB_VX');
    expect(result.args[0]).toBe(0x1);
    expect(result.args[1]).toBe(0xA);
  });

  it ('Disassembles SET_VX_UNSHIFT_VY opcode (8XYE)', () => {
    const result = inst.disassemble(0x81AE);

    expect(result.instruction.id).toBe('SET_VX_UNSHIFT_VY');
    expect(result.args[0]).toBe(0x1);
    expect(result.args[1]).toBe(0xA);
  });
});