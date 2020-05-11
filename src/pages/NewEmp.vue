<template>
  <div class="q-pa-md">
    
    <div class="row">
      <div class="col-1 col-sm-6">
        <q-card flat bordered class="my-card">
          <q-card-section>
            <div class="text-h6 text-white bg-blue-10" style=";text-align: Left;">
              Primary Information
            </div>
          </q-card-section>

          <q-separator inset />

          <q-card-section>
            <div class="row">
              <div class="col-1 col-sm-5" style="min-height: 70px">
                Employee ID
                <q-input dense outlined v-model="empid" style="font-size: 15px;" />
              </div>
              <div class="col-1 col-sm-2"></div>
              <div class="col-1 col-sm-5">
                Nickname
                <q-input dense outlined v-model="nick"  style="font-size: 15px;"/>
              </div>
            </div>
            <div class="row">
              <div class="col-1 col-sm-5" style="min-height: 70px">
                First Name
                <q-input dense outlined v-model="fname" />
              </div>
              <div class="col-1 col-sm-2"></div>
              <div class="col-1 col-sm-5">
                Last Name
                <q-input dense outlined v-model="lname" />
              </div>
            </div>
            <div class="row">
              <div class="col-1 col-sm-5" style="min-height: 70px">
                Middle Name
                <q-input dense outlined v-model="mname" />
              </div>
              <div class="col-1 col-sm-2"></div>

              <div class="col-1 col-sm-5">
                <div class="row">
                  <div class="col-1 col-sm-2" style="min-height: 30px">
                    Gender
                  </div>
                </div>
                <div class="row">
                  <div class="col-1 col-sm-5">
                    <q-radio dense v-model="sex" val="Female" label="Female" />
                  </div>
                  <div class="col-1 col-sm-5">
                    <q-radio dense v-model="sex" val="Male" label="Male" />
                  </div>
                </div>
              </div>              
            </div>
            <div class="row">
              <div class="col-1 col-sm-5" style="min-height: 70px">
                Birthdate
                <q-expansion-item dense>
                    <template v-slot:header>
                      <q-item-section avatar>
                        <q-icon color="blue" name="today" />
                      </q-item-section>
                      <q-item-section>
                        {{date}}
                      </q-item-section>
                    </template>
                    <q-card>
                      <q-card-section>
                        <q-date v-model="date" minimal />
                      </q-card-section>
                    </q-card>
                </q-expansion-item>
              </div>
              <div class="col-1 col-sm-2"></div>
              <div class="col-1 col-sm-5">
                Age
                <q-input dense outlined v-model="age" style="font-size: 15px;"/>
              </div>
            </div>
            <div class="row">
              <div class="col-1 col-sm-5" style="min-height: 70px">
                Mobile Ph
                <q-input dense outlined v-model="mobph" style="font-size: 15px;" />
              </div>
              <div class="col-1 col-sm-2"></div>
              <div class="col-1 col-sm-5">
                Marital Status
                <q-select dense outlined v-model="mstat" :options="options" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-1 col-sm-6">
        <q-card flat bordered class="my-card">
          <q-card-section>
            <div class="text-h6 text-white bg-blue-10" style=";text-align: Left;">
              Designation
            </div>
          </q-card-section>

          <q-separator inset />

          <q-card-section>

            <div class="row">
              <div class="col-1 col-sm-5" style="min-height: 70px">
                Hired Date*
                <q-expansion-item dense>
                    <template v-slot:header>
                      <q-item-section avatar>
                        <q-icon color="blue" name="today" />
                      </q-item-section>
                      <q-item-section>
                        {{hdate}}
                      </q-item-section>
                    </template>
                    <q-card>
                      <q-card-section>
                        <q-date v-model="hdate" minimal />
                      </q-card-section>
                    </q-card>
                </q-expansion-item>
              </div>
              <div class="col-1 col-sm-2"></div>
              <div class="col-1 col-sm-5" style="min-height: 70px">
                Assigned Position
                <q-select dense outlined v-model="apos" :options="options" />
              </div>
            </div>
            <div class="row">
              <div class="col-1 col-sm-5" style="min-height: 70px">
                Location
                <q-select dense outlined v-model="loc" :options="options" />
              </div>
              <div class="col-1 col-sm-2"></div>
              <div class="col-1 col-sm-5">
                Department
                <q-select dense outlined v-model="dept" :options="options" />
              </div>
            </div>
            <div class="row">
              <div class="col-1 col-sm-5" style="min-height: 70px">
                Reporting To
                <q-select dense outlined v-model="repto" :options="options" />
              </div>
              <div class="col-1 col-sm-2"></div>
              <div class="col-1 col-sm-5">
                Employment Status
                <q-select dense outlined v-model="empstat" :options="options" />
              </div>
            </div>
            <div class="row">
              <div class="col-1 col-sm-8" style="min-height: 70px">
                Company Assigned Email
                <q-input dense outlined v-model="compmail" style="font-size: 15px;"/>
              </div>
              <div class="col-1 col-sm-4"></div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="row">
      <div class="col-1 col-sm-6">
        <q-card flat bordered class="my-card">
          <q-card-section>
            <div class="text-h6 text-white bg-blue-10" style=";text-align: Left;">
              Address Details
            </div>
          </q-card-section>

          <q-separator inset />

          <q-card-section>
           <div class="row">
              <div class="col-1 col-sm-6" style="min-height: 70px">
                Street Address
                <q-input dense outlined v-model="street" style="font-size: 15px;" />
              </div>
              <div class="col-1 col-sm-1"></div>
              <div class="col-1 col-sm-5">
                City
                <q-select dense outlined v-model="city" :options="options" />
              </div>
           </div>
           <div class="row">
              <div class="col-1 col-sm-5" style="min-height: 70px">
                Country
                <q-select dense outlined v-model="country" :options="options" />
              </div>
              <div class="col-1 col-sm-4">
                Brgy
                <q-input dense outlined v-model="brgy" style="font-size: 15px;" />
              </div>
              <div class="col-1 col-sm-3">
                Zip Code
                <q-input dense outlined v-model="text" style="font-size: 15px;" />
              </div>
           </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-1 col-sm-6">
        <q-card flat bordered class="my-card">
          <q-card-section>
            <div class="row">
              <div class="col-1 col-sm-12" style="min-height: 60px">
                <q-checkbox size="lg" v-model="newcon" name="onboard" val="onboard" label="Automatically send onboarding message to this employee?" />
              </div>
           </div>
           <div class="row">
              <div class="col-1 col-sm-12" style="min-height: 60px">
                <q-checkbox size="lg" v-model="newcon" name ="access" val="access" label="Auto-grant Employee Portal access?" />
              </div>
           </div>
           <div class="row">
              <div class="col-1 col-sm-12" style="min-height: 60px">
                <q-checkbox size="lg" v-model="newcon" name="new" val="new" label="Enter more employee details to this employee after saving the record" />
              </div>
           </div>
          </q-card-section>
        </q-card>
        <div class="row">
              <div class="col-1 col-sm-8" style="min-height: 70px"></div>
              <div class="col-1 col-sm-2" style="min-height: 70px">                
                <div class="column items-end">
                  <q-btn label="Add" type="submit" color="primary"                     
                   to="/profile/addemp"/>                   
                </div>                
              </div>
              <div class="col-1 col-sm-2" style="min-height: 70px">
                <div class="column items-end">
                  <q-btn label="Cancel" type="submit" color="secondary" to="/home"/>
                </div>                
              </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      sex: 'Female',
      date: '2019/02/01',
      hdate: '2019/02/01',
      newcon: ['any']
    }
  }
}
</script>