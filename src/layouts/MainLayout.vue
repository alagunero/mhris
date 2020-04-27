<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated class="bg-black">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>mHRIS</q-toolbar-title>
        </q-toolbar>
      </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above

     :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"

        :width="300"
        :breakpoint="600"
        bordered
        content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
          <q-list padding>

            <q-separator />

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section>
                Home
              </q-item-section>
            </q-item>

            <q-expansion-item
              icon="account_box"
              label="Employee Profile"
            > 
              <q-item inset-level="1" clickable v-ripple to="/profile/allemp">
                <q-item-section avatar>
                  <q-icon name="group" />
                </q-item-section>

                <q-item-section>
                  All Employees
                </q-item-section>
              </q-item>
              <q-item inset-level="1" clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="account_tree" />
                </q-item-section>

                <q-item-section>
                  Organizational Chart
                </q-item-section>
              </q-item>
              <q-item inset-level="1" clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="person_add" />
                </q-item-section>

                <q-item-section>
                  Import Employee
                </q-item-section>
              </q-item>
              <q-item inset-level="1" clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="how_to_reg" />
                </q-item-section>

                <q-item-section>
                  Self Service
                </q-item-section>
              </q-item>
              <q-item inset-level="1" clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="event" />
                </q-item-section>

                <q-item-section>
                  Reminder Setup
                </q-item-section>
              </q-item>
            </q-expansion-item>         

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="event_note" />
              </q-item-section>

              <q-item-section>
                Leave Management
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="work" />
              </q-item-section>

              <q-item-section>
                Recruitment
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="attach_money" />
              </q-item-section>

              <q-item-section>
                Expenses
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="watch" />
              </q-item-section>

              <q-item-section>
                Time Track
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="ballot" />
              </q-item-section>

              <q-item-section>
                Payroll
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="folder" />
              </q-item-section>

              <q-item-section>
                Document Repository
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="cast_connected" />
              </q-item-section>

              <q-item-section>
                Company News/Events
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="file_copy" />
              </q-item-section>

              <q-item-section>
                HR Reports
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>

  </q-layout>
</template>

<script>
    export default {
      data () {
        return {
          drawer: false,
          miniState: true
        }
      }
    }
</script>
