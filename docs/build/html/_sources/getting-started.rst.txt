Getting Started
===============

DocsServer is used to present and navigate between a collection of related static html sites. (I.e. ones which run entirely in the browser.) As such, to add a new site for DocsServer to wrap we simply need to provide the html, css, and js required to present the site, as well as a small modification to the DocsServer application itself.


Configuration
-------------

The only config is a single parameter (``toolbarTitle``) found in ``src/app/services/site-config.service.ts``. This parameter is used by the toolbar and sidenav to determine what text to place as the main site heading.


Adding Sites
------------

Adding a new site to DocsServer requires modifications/addtions in two locations.

- ``src/app/repo-manifest.ts``
- ``src/assets/serve/``


Editing ``repo-manifest.ts``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The TypeScript file ``src/app/repo-manifest.ts`` lets DocsServer know which static sites it should include in the sidenav. The structure of the ``repo-manifest.ts`` is simple and resembles JSON or the typical mapping types present in most programming languages, with the general structure being:

.. code-block:: typescript

   REPOS = [
       {
           // site objects ...
       },
       {
           name: "<name of the repo>",
           prettyName: "<repo name which will be used in the nav>",
           indexFile: "<path/to/root.html>"
       },
       {
           // more site objects ...
       }
   ]

Decscibe ``name``, ``prettyName``, ``indexFile``.

**Note:** The order is reflected in the side nav!


Adding to ``src/assets/serve/``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

What goes in here; the directory structure and how it relates to ``REPOS`` defined above.

.. toctree::
   :maxdepth: 2
