<template>
  <div class="q-pa-md">
    
    <div class="row">
      <div class="col-1 col-sm-6">
        <q-card flat bordered class="my-card">
          <q-card-section>
            
              <q-card flat bordered class="my-card" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
                <q-card-section>
                  <div class="text-h6" style="text-align: center;">Primary Information</div>
                </q-card-section>
              </q-card>
          </q-card-section>

          <q-separator inset />

          <q-card-section>
            <div class="row">
              <div class="col-1 col-sm-5" style="min-height: 70px">
                <q-input square outlined v-model="text" label="Employee ID" style="font-size: 15px;" />
              </div>
              <div class="col-1 col-sm-2"></div>
              <div class="col-1 col-sm-5">
                <q-input square outlined v-model="text" label="Nickname" style="font-size: 15px;"/>
              </div>
            </div>
            <div class="row">
              <div class="col-1 col-sm-5" style="min-height: 70px">
                <q-input square outlined v-model="text" label="First Name" />
              </div>
              <div class="col-1 col-sm-2"></div>
              <div class="col-1 col-sm-5">
                <q-input square outlined v-model="text" label="Last Name" />
              </div>
            </div>
            <div class="row">
              <div class="col-1 col-sm-5" style="min-height: 70px">
                <q-input square outlined v-model="text" label="Middle Name" />
              </div>
              <div class="col-1 col-sm-2"></div>
              <div class="col-1 col-sm-5">
                <q-radio v-model="sex" val="Female" label="Female" />
                <q-radio v-model="sex" val="Male" label="Male" />
              </div>
            </div>
            <div class="row">
              <div class="col-1 col-sm-5" style="min-height: 70px">
                <q-expansion-item>
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
                <q-input square outlined v-model="text" label="Age" style="font-size: 15px;"/>
              </div>
            </div>
            <div class="row">
              <div class="col-1 col-sm-5" style="min-height: 70px">
                <q-input square outlined v-model="text" label="Mobile Ph" style="font-size: 15px;" />
              </div>
              <div class="col-1 col-sm-2"></div>
              <div class="col-1 col-sm-5">
                <q-select outlined v-model="model" :options="options" label="Marital Status" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-1 col-sm-6">
        <q-card flat bordered class="my-card">
          <q-card-section>
            
              <q-card flat bordered class="my-card" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
                <q-card-section>
                  <div class="text-h6" style="text-align: center;">Designation</div>
                </q-card-section>
              </q-card>
          </q-card-section>

          <q-separator inset />

          <q-card-section>
            <div class="row">
              <div class="col-1 col-sm-5">
                Hired Date*
              </div>
              <div class="col-1 col-sm-2"></div>
              <div class="col-1 col-sm-5"></div>
            </div>
            <div class="row">
              <div class="col-1 col-sm-5" style="min-height: 70px">
                <q-expansion-item>
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
              <div class="col-1 col-sm-5">
                <q-select outlined v-model="model" :options="options" label="Assigned Position" />
              </div>
            </div>
            <div class="row">
              <div class="col-1 col-sm-5" style="min-height: 70px">
                <q-select outlined v-model="model" :options="options" label="Location" />
              </div>
              <div class="col-1 col-sm-2"></div>
              <div class="col-1 col-sm-5">
                <q-select outlined v-model="model" :options="options" label="Department" />
              </div>
            </div>
            <div class="row">
              <div class="col-1 col-sm-5" style="min-height: 70px">
                <q-select outlined v-model="model" :options="options" label="Reporting To" />
              </div>
              <div class="col-1 col-sm-2"></div>
              <div class="col-1 col-sm-5">
                <q-select outlined v-model="model" :options="options" label="Employment Status" />
              </div>
            </div>
            <div class="row">
              <div class="col-1 col-sm-8" style="min-height: 70px">
                <q-input square outlined v-model="text" label="Company Assigned Email" style="font-size: 15px;"/>
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
            
              <q-card flat bordered class="my-card" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
                <q-card-section>
                  <div class="text-h6" style="text-align: center;">Address Details</div>
                </q-card-section>
              </q-card>
          </q-card-section>

          <q-separator inset />

          <q-card-section>
           <div class="row">
              <div class="col-1 col-sm-6" style="min-height: 70px">
                <q-input square outlined v-model="text" label="Street Address" style="font-size: 15px;" />
              </div>
              <div class="col-1 col-sm-1"></div>
              <div class="col-1 col-sm-5">
                <q-select outlined v-model="model" :options="options" label="City" />
              </div>
           </div>
           <div class="row">
              <div class="col-1 col-sm-5" style="min-height: 70px">
                <q-select outlined v-model="model" :options="options" label="Country" />
              </div>
              <div class="col-1 col-sm-4">
                <q-input square outlined v-model="text" label="Brgy" style="font-size: 15px;" />
              </div>
              <div class="col-1 col-sm-3">
                <q-input square outlined v-model="text" label="Zip Code" style="font-size: 15px;" />
              </div>
           </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-1 col-sm-6">
        <q-card flat bordered class="my-card">
          <q-card-section>
            <div class="row">
              <div class="col-1 col-sm-12" style="min-height: 70px">
                <q-checkbox size="lg" v-model="newcon" val="onboard" label="Automatically send onboarding message to this employee?" />
              </div>
           </div>
           <div class="row">
              <div class="col-1 col-sm-12" style="min-height: 70px">
                <q-checkbox size="lg" v-model="newcon" val="access" label="Auto-grant Employee Portal access?" />
              </div>
           </div>
           <div class="row">
              <div class="col-1 col-sm-12" style="min-height: 70px">
                <q-checkbox size="lg" v-model="newcon" val="new" label="Enter more employee details to this employee after saving the record" />
              </div>
           </div>
          </q-card-section>
        </q-card>
        <div class="row">
              <div class="col-1 col-sm-8" style="min-height: 70px"></div>
              <div class="col-1 col-sm-2" style="min-height: 70px">
                <div class="column items-end">
                  <q-btn label="Add" type="submit" color="primary" to="/profile/newemp"/>
                </div>                
              </div>
              <div class="col-1 col-sm-2" style="min-height: 70px">
                <div class="column items-end">
                  <q-btn label="Cancel" type="submit" color="secondary" to="/"/>
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