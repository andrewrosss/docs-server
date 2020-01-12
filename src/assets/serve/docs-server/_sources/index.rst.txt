.. DocsServer documentation master file, created by
   sphinx-quickstart on Sun Jan 12 12:29:52 2020.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

DocsServer
==========

Welcome to DocsServer's documentation! This application bundles many separately created (but inter-related) static html documents, pages, and sites.

**tl;dr:** DocsServer wraps separate static sites in a common navigation UI.

Why Would I Use DocsServer?
---------------------------

Perhaps the best motivation for using DocsServer is to examine the intended use-case.

Suppose that you've been writing code for some application, and either the application grows large enough in size, or another application start using some of the internal components/code from the original app that you decide to factor out the core functionality into a stand-alone package, say ``core``.

Again, over time perhaps some additional functionality provided to this application (or other applications leveraging your ``core`` package) has grown sufficiently in complexity that it makes sense for that functionality to also reside in it's own package, say ``predictive-models``.

At this point, assuming that you've been writing some kind of developer documentation that can be served over the web, you now how at least 3 separate (but highly related) sets of documentation. An example where this could occur is maybe you've written a python application, which uses multiple bespoke libraries (packages) that you've written, all of which are documented using sphinx.

Now you have a bunch of great looking static sites.

Of course, you could serve them independently, however because of the relatedness of the packages/applications it's likely that while working on one package, you'll end up navigating to other package's documentation. This isn't a problem in itself, but navigating the various package's docs could be more convenient.

To make navigating around easier you could add links throughout one package's docs to the others, but this could become hard to maintain.

**This is where DocsServer comes in.** As a solution to separtely-serving and navigating between the various sets of documentation, instead bundle all of them (*as is*) with DocServer, and serve them from a unified location!

.. toctree::
   :maxdepth: 2

   installation
   getting-started
   deployment


Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
