import ipywidgets as widgets
from traitlets import Unicode

class HelloWidget(widgets.DOMWidget):
    _view_name = Unicode('HelloView').tag(sync=True)
    _view_module = Unicode('hello').tag(sync=True)
    _view_module_version = Unicode('0.1.0').tag(sync=True)
    value = Unicode().tag(sync=True)
    def __init__(self, value, **kwargs):
        super(HelloWidget, self).__init__(**kwargs)
        self.value = value