module.exports = {
  requires: {
    bundle: "ai"
  },
  run: [
    {
      when: "{{!exists('app')}}",
      method: "shell.run",
      params: {
        message: [
          "git clone --revision=e73d1e17c3754f046352014856a922f8208fb5d3 https://github.com/microsoft/VibeVoice app"
        ]
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          path: "app",
          venv: "env"
        }
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install -e ."
        ]
      }
    },
    {
      method: "hf.download",
      params: {
        path: "app",
        "_": ["microsoft/VibeVoice-Realtime-0.5B"],
        "local-dir": "models/VibeVoice-Realtime-0.5B"
      }
    }
  ]
}
