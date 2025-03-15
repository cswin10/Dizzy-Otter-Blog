const { spawn } = require('child_process');

const child = spawn('npm', ['start'], {
  env: { ...process.env, NODE_OPTIONS: '--max_old_space_size=4096' },
  stdio: 'inherit',
});

child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});