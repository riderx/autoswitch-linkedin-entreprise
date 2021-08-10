<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Commentez un post Linkedin avec votre entreprise
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div class="rounded-md bg-yellow-50 p-4" v-if="showInfoCompany">
          <div class="flex">
            <div class="flex-shrink-0">
              <InformationCircleIcon class="h-5 w-5 text-yellow-400 inline" aria-hidden="true" />
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-yellow-800">
                Pour trouver l'URL admin de votre entreprise :
              </h3>
              <div class="mt-2 text-sm text-yellow-700">
                <ul class="list-disc pl-5 space-y-1">
                  <li>
                    Cliquez sur votre avatar en haut a gauche, puis le nom de l'entreprise voulu dans le menu.
                  </li>
                  <li>
                    Copiez l'URL en haut dans le navigateur.
                  </li>
                  <li>
                    Ce lien seras sauvegarder dans votre navigateur entre chaque visite
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="space-y-6">
          <div>
            <label for="companyUrl" class="block text-sm font-medium text-gray-700">
              URL Linkedin admin de votre entreprise
              <InformationCircleIcon class="h-5 w-5 text-yellow-400 inline" aria-hidden="true" @click="showInfoCompany = !showInfoCompany" />
            </label>
            <div class="mt-1">
              <input id="companyUrl" name="companyUrl" v-model="companyUrl" autocomplete="off" type="text" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div>
            <div class="rounded-md bg-yellow-50 p-4" v-if="showInfoPost">
              <div class="flex">
                <div class="flex-shrink-0">
                  <InformationCircleIcon class="h-5 w-5 text-yellow-400 inline" aria-hidden="true" />
                </div>
                <div class="ml-3">
                  <h3 class="text-sm font-medium text-yellow-800">
                    Pour trouver l'URL d'un post :
                  </h3>
                  <div class="mt-2 text-sm text-yellow-700">
                    <ul class="list-disc pl-5 space-y-1">
                      <li>
                        Allez sur les 3 petits points en haut à droite d'un post et cliquez sur "copier le lien vers le post".
                      </li>
                      <li>
                        Your password must include at least one pro wrestling finishing move
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <label for="postUrl" class="block text-sm font-medium text-gray-700">
              URL du post à commenter
              <InformationCircleIcon class="h-5 w-5 text-yellow-400 inline" aria-hidden="true" @click="showInfoPost = !showInfoPost" />
            </label>
            <div class="mt-1">
              <input id="postUrl" name="postUrl" autocomplete="off" v-model="postUrl" type="text" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div class="flex items-center justify-between">

            <div class="text-sm">
              <a href="https://msha.ke/martindonadieu" target="blank" class="font-medium text-indigo-600 hover:text-indigo-500">
                par Martin donadieu, INDIE MAKER
              </a>
            </div>
          </div>

          <div>
            <button @click="createLink()" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Acceder
            </button>
          </div>
        </div>
      </div>
    </div>
      <p class="mt-5 mx-auto text-center text-sm text-gray-600">
        <iframe class="mx-auto" src="https://ghbtns.com/github-btn.html?user=riderx&repo=autoswitch-linkedin-entreprise&type=star&count=true&size=large" frameborder="0" scrolling="0" width="120" height="30" title="GitHub"></iframe>
      </p>
  </div>
</template>

<script>
import { InformationCircleIcon } from '@heroicons/vue/solid'

const companyRegex = /company\/(?<company>.*?)\//
export default {
  name: 'Home',
    components: {
    InformationCircleIcon
  },
  data() {
    return {
      showInfoCompany: false,
      showInfoPost: false,
      companyUrl: "",
      postUrl: "",
    }
  },
  mounted() {
  const companyUrl = localStorage.getItem('companyUrl');
  this.companyUrl = companyUrl ? companyUrl : "";
  },
  computed: {
    companyName() {
      const companyGroups = this.companyUrl.match(companyRegex);
      return companyGroups?.groups?.company || ""
    },
    postWithCompany() {
      return `${this.postUrl}?actorCompanyId=${this.companyName}`
    },
  },
  methods: {
    createLink() {
      console.log('createLink', this.companyUrl, this.companyName, this.postUrl, this.postWithCompany);
      localStorage.setItem('companyUrl', this.companyUrl);
      window.location.search = `?ref=${this.companyUrl}`; // to allow plausible stats by company
      window.open(this.postWithCompany, '_blank');
    }
  },
}
</script>
