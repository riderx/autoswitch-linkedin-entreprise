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
        <div class="space-y-6">
          <div>
            <label for="companyUrl" class="block text-sm font-medium text-gray-700">
              URL de votre entreprise
            </label>
            <div class="mt-1">
              <input id="companyUrl" name="companyUrl" v-model="companyUrl" type="text" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div>
            <label for="postUrl" class="block text-sm font-medium text-gray-700">
              URL du post cible
            </label>
            <div class="mt-1">
              <input id="postUrl" name="postUrl" v-model="postUrl" type="text" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div class="flex items-center justify-between">

            <div class="text-sm">
              <a href="https://msha.ke/martindonadieu" target="blank" class="font-medium text-indigo-600 hover:text-indigo-500">
                par Martin donadieu INDIE MAKER
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
  </div>
</template>

<script>
const companyRegex = /company\/(?<company>.*?)\//
export default {
  name: 'HelloWorld',
  data() {
    return {
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
      window.open(this.postWithCompany, '_blank');
    }
  },
}
</script>
