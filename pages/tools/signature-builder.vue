<template>
  	<core-header-page>Tools: Signature Generator</core-header-page>

    <div class="container">
	
		<div class="max-w-[700px]">
			<form class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
				<input v-model="name" placeholder="Full Name" class="input" />
				<input v-model="job" placeholder="Job Function" class="input" />
				<input v-model="email" placeholder="Email Address" class="input" />
				<input v-model="phone" placeholder="Phone Number" class="input" />
				<input v-model="website" placeholder="Company Website" class="input" />
				<input v-model="imageUrl" placeholder="Profile Image URL" class="input" />
			</form>
		</div>
	
		<div class="mb-4">
			<button @click="copyToClipboard" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
			Copy HTML Signature
			</button>
		</div>
	
		<div>
			<h2 class="font-semibold mb-2">Live Preview:</h2>
			<div class="border p-4" v-html="signatureHtml"></div>
		</div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const name = ref('')
  const job = ref('')
  const email = ref('')
  const phone = ref('')
  const website = ref('')
  const imageUrl = ref('')
  
  const signatureHtml = computed(() => {
    return `
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:400px;font-family:Verdana,Geneva,sans-serif;font-size:10px;line-height:16px;color:#233242;">
    <tr>
      <td width="130" valign="middle" style="padding-right:10px;">
        <img src="${imageUrl.value}" alt="Profile Image of ${name.value}" width="100" height="100" style="width:100px;height:100px;border-radius:50%;display:block;">
      </td>
      <td width="270" valign="top">
        <table cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="font-size:10px;line-height:16px;font-weight:bold;color:#233242;">
              ${name.value} <span style="color:#a7b5c4;margin:0 5px;">|</span> ${job.value}
            </td>
          </tr>
          <tr>
            <td style="font-size:10px;line-height:16px;">
              <a href="mailto:${email.value}" style="color:#233242;text-decoration:none;">${email.value}</a>
            </td>
          </tr>
          <tr>
            <td style="font-size:10px;line-height:16px;">
              ${phone.value}
            </td>
          </tr>
          <tr>
            <td style="padding:8px 0;">
              <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="width:16px;border-bottom:1px solid #f9a11b;height:5px;"></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="font-size:10px;line-height:16px;">
              <a href="${website.value}" style="color:#233242;font-weight:bold;text-decoration:none;" target="_blank" rel="noopener noreferrer">${website.value}</a>
            </td>
          </tr>
          <tr>
            <td style="font-size:10px;line-height:16px;color:#233242;">your digital partner</td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`
  })
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(signatureHtml.value)
      alert('Signature copied to clipboard!')
    } catch (err) {
      alert('Failed to copy. Try manually copying the preview.')
    }
  }
  </script>
  
  <style scoped>
  .input {
    @apply border border-gray-300 p-2 rounded w-full;
  }
  </style>
  