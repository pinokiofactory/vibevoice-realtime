module.exports = {
  run: [
    {
      when: "{{exists('.git')}}",
      method: "shell.run",
      params: {
        message: "git pull"
      }
    },
    {
      when: "{{exists('app/.git')}}",
      method: "shell.run",
      params: {
        path: "app",
        message: "git pull"
      }
    },
    {
      when: "{{exists('app')}}",
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
      when: "{{exists('app')}}",
      method: "hf.download",
      params: {
        path: "app",
        "_": ["microsoft/VibeVoice-Realtime-0.5B"],
        "local-dir": "models/VibeVoice-Realtime-0.5B"
      }
    }
  ]
}

