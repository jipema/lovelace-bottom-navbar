# lovelace-bottom-navbar

Simply moves Lovelace navbar to the bottom of the screen

# Features

* Moves Lovelace navbar to the bottom as soon as the resource file is loaded
* Add bottom spacing for the gesture menu on the iOS companion App

# Installation

* Download [lovelace-bottom-navbar.js](https://github.com/jipema/lovelace-bottom-navbar/releases/latest) from the latest release and place it in your `www` folder
* Add the resource below

YAML mode users add it to their [configuration.yaml](https://www.home-assistant.io/lovelace/dashboards-and-views/#adding-more-dashboards-with-yaml) file.
Non-YAML mode, or Storage Mode, users can find resources in their sidebar under `"Configuration" > "Lovelace Dashboards" > "Resources"`

```yaml
resources:
  # You'll need to update the version number at the end of the url after every update.
  - url: /local/lovelace-bottom-navbar.js?v=0.0.1
    type: module
```

* Restart Home Assistant