<template>

  <q-page class="flex flex-center">

		<div class="q-pa-md">		   
			<div class="row">
		      <div class="col-4">
		      	<q-card  flat bordered class="my-card">
			      <q-card-section>
			        <div class="text-h6">Reminders</div>
			      </q-card-section>

			      <q-separator inset />

			      <q-card-section>
			        Reminder 1
			        Reminder 2
			        Reminder 3
			      </q-card-section>
			    </q-card>
		      </div>
		      <div class="col-1"></div>
		      <div class="col-7">
		      	<q-card flat bordered class="my-card">
			      <q-card-section>
			        <div class="text-h6">Shortcuts</div>
			      </q-card-section>

			      <q-separator inset />

			      <q-card-section>
			        Shortcuts 1               Shortcuts 2                 Shortcuts 3
			        <br/>
			        Shortcuts 4               Shortcuts 5                 Shortcuts 6
			      </q-card-section>
			    </q-card>
		  	  </div>
		  </div>
			<div class="row">
		      <div class="col-4">
		      	<q-card  flat bordered class="my-card col-4">
			      <q-card-section>
			        <div class="text-h6">New Employee Trend Graph</div>
			      </q-card-section>

			      <q-separator inset />

			      <q-card-section>
			        Trend 1
			        Trend 2
			        Trend 3
			      </q-card-section>
			    </q-card>
		      </div>
		      <div class="col-1"></div>
		      <div class="col-7">
		      	<q-card flat bordered class="my-card col-7">
			      <q-card-section>
			        <div class="text-h6">Report Tiles</div>
			      </q-card-section>

			      <q-separator inset />

			      <q-card-section>
			        RPT 1               RPT 2                 RPT 3
			        <br/>
			        RPT 4               RPT 5                 RPT 6
			      </q-card-section>
			    </q-card>
		  	  </div>
		  </div>

		</div>
	  </q-page>

</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
