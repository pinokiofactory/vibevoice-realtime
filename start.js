module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        venv: "env",
        env: {},
        path: "app",
        message: [
          "python demo/vibevoice_realtime_demo.py --model_path models/VibeVoice-Realtime-0.5B --port {{port}} --device {{gpu === 'apple' ? 'mps' : (gpu === 'nvidia' ? 'cuda' : 'cpu')}}"
        ],
        on: [{
          event: "/(http:\\/\\/[0-9.:]+)/",
          done: true
        }]
      }
    },
    {
      method: "local.set",
      params: {
        url: "{{input.event[1]}}"
      }
    }
  ]
}
