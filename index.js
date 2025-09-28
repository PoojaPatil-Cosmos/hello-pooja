import * as core from '@actions/core';
import * as core from '@actions/github';
const name = core.getInput('name');
const output_value = `Hello ${name} from Pooja!`;
core.setOutput('greeting', output_value);