import InputDevice from './InputDevice';
import OutputDevice from './OutputDevice';
// Interface Adapter
export default class CLIManager {
    commands: any;

    constructor (readonly inputDevice: InputDevice, readonly outputDevice: OutputDevice) {
        this.commands = {};
        inputDevice.onData(async (text: string) => {
            await this.type(text);
        });
    }

    addCommand (command: string, callback: Function) {
        this.commands[command] = callback;
    }

    async execute (command: string) {
        const [name] = command.split(" ");
        const params = command.replace(name + " ", "");
        const output = await this.commands[name.trim()](params);
        return output;
    }

    async type (text: string) {
        const output = await this.execute(text);
        if (output) await this.outputDevice.write(output);
    }
}