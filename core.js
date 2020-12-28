class CPU {
  constructor() {
    this.memory = new Uint8Array(4096);
    this.registers = new Uint8Array(16);
    this.stack = new Uint16Array(16);
    this.I = 0;
    this.PC = 0x200;
    this.SP = -1;
    this.DT = 0;
    this.ST = 0;
  }
}