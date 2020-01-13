Deployment
==========

TODO: setting up firebase, so that we can deploy there.

Deploying an updated build to firebase hosting is simple.

We first have to update the ``dist/`` folder with the fresh content. This is acheived by running the following command from the root of the project:

.. code-block:: bash

   ng build --prod

Then we push to firebase using the firebase CLI, as follows:

.. code-block:: bash

   firebase deploy

Again, the above command should be run in the root of the project.


.. toctree::
   :maxdepth: 2
