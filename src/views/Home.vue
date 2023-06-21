<template>
  <div class="home">
    <v-form class="pa-4" >
                <div class="my-2">
                  <v-row>
                    <v-col cols="12" sm="6">
                      <span><h2 bold> Personal Details </h2> </span>
                    </v-col>
                  </v-row>

                  <v-row >
                    <v-col cols="12" sm="6">
                      <div>

                        <span> Wanted Job Title  <v-text-field v-model="nik"
                        solo
                        >
                        </v-text-field>
                        </span>

                      </div>
                    </v-col>
                  

                  
                    <v-col cols="12" sm="6">
                      
                      <img id="Preview_image_create" class="Preview_image">
                      <v-file-input
                        v-on:change="Preview_image($event)"
                        label='Upload Picture'
                        ></v-file-input>


                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" sm="6">
                      <div>

                        <span> First Name <v-text-field v-model="Tanggal_diangkatTetap"
                        solo
                        >
                        </v-text-field>
                      </span>

                      </div>
                    </v-col>

                    <v-col cols="12" sm="6">

                      <span> Last Name <v-text-field v-model="PT"
                        solo
                        >
                        </v-text-field>
                      </span>

                
              </v-col>

                    <v-col cols="12" sm="6">

                      <span> Email <v-text-field v-model="statusKerja"
                        solo
                        :rules="emailRules"
                        >
                        </v-text-field>
                      </span>

                      
                    </v-col>
                  
                    <v-col cols="12" sm="6">

                      <span> Phone <v-text-field v-model="Tanggal_Lahir"
                        solo
                        v-on:keypress="isNumber($event)"
                        >
                        </v-text-field>
                      </span>

                      
                    </v-col>

                    <v-col cols="12" sm="6">
                    <span>Country </span>
                      <v-autocomplete
                      v-model="approval1"
                      :items="atasanApproval1"
                      item-text="data"
                      item-value="data"
                      dense
                      outlined
                      @change="assignCity"
                    ></v-autocomplete>
                      </v-col>

                      <v-col cols="12" sm="6">
                        <span>City </span>
                      <v-autocomplete
                      v-model="approval2"
                      :items="atasanApproval2"
                      item-text="data"
                      item-value="data"
                      dense
                      outlined
                    ></v-autocomplete>
                      </v-col>

                  </v-row>

                  <v-row>


              <v-col cols="12" sm="6" >

                <span> Address  <v-text-field v-model="Departemen"
                        solo
                        >
                        </v-text-field>
                      </span>

                

              </v-col>

              <v-col cols="12" sm="6">

                <span> Postal Code <v-text-field v-model="Cabang"
                        solo
                        >
                        </v-text-field>
                      </span>
                      
                    </v-col>

                    <v-col cols="12" sm="6">

                <span> Driving License <v-text-field v-model="Jabatan"
                        solo
                        >
                        </v-text-field>
                      </span>
                      
                    </v-col>

                    <v-col cols="12" sm="6">

                <span> Nationality <v-text-field v-model="jobClass"
                        solo
                        >
                        </v-text-field>
                      </span>
                      
                    </v-col>

                    <v-col cols="12" sm="6">

                      <span> Place Of Birth <v-text-field v-model="alamatKtp"
                      auto-grow
                      
                      solo
                        >
                        </v-text-field>
                      </span>
                      
                    </v-col>

                    <v-col cols="12" sm="6">

                    <span> Date Of Birth <v-text-field v-model="alamatDomisili"
                    auto-grow
                    
                    solo
                        >
                        </v-text-field>
                      </span>
                      
                    </v-col>

                  <v-row>
                    <v-col cols="12" sm="12">
                      <span><h2 bold> Professional Summary </h2> </span>
                      <span>
                        Write 2-4 Short & Energetic Sentence
                      </span>
                      <v-tiptap
                    v-model="valueEdt"
                    :toolbar="['bold', 'italic', 'underline' ,'strike' ,'color' , '|', 'h1','h2' ,'h3' , 'p','|' , 'left' , 'right' , 'center' ,'|' ,'emoji' , 'image','>', '#sendbutton', '#mybutton']"
                    :uploadImage="uploadImage"
                    >
                    <template #mybutton="{ editor }">
                    <v-btn icon small title="Clear Content" @click="editor.commands.clearContent()">
                    <v-icon>mdi-delete-circle-outline</v-icon>
                    </v-btn>
                    </template>
                    </v-tiptap>

                    </v-col>
                  </v-row>
                  </v-row>

                <v-row>
                    <v-col cols="12" sm="6">
                      <span><h3 bold> Employment History </h3> </span>
                    </v-col>
                  </v-row>
                  <v-row v-for="(input, k) in inputsganjil" :key="k">
                  <v-col cols="12" sm="6">
                    <v-container>
                    <v-expansion-panels>
              <v-expansion-panel>
              <v-expansion-panel-header>
            <template v-slot:default="{ open }">
          <v-row no-gutters>
            <v-col cols="4">
              <v-fade-transition leave-absolute>
                <span
                  v-if="open"
                  key="0"
                >
                  Enter Position
                </span>
                <span
                v-else
                  key="1">
              Position:
               <div><h3>{{ input.name }}</h3></div>
                </span>
              </v-fade-transition>
            </v-col>
            <v-col
              cols="8"
              class="text--secondary"
            >
              <v-fade-transition leave-absolute>
                <span
                  v-if="open"
                  key="0"
                >
                  Enter Year
                </span>
                <span
                  v-else
                  key="1"
                >
                Year {{ input.year }}
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-text-field
          v-model="input.name"
          placeholder="Type Data"
        >  </v-text-field>
        <v-text-field
          v-model="input.year"
          placeholder="Type Data"
        >  </v-text-field>

        
      </v-expansion-panel-content>
    </v-expansion-panel>
                    </v-expansion-panels>
                    </v-container>


                    <v-btn
                                  class="mx-2"
                                  fab
                                  dark
                                  small
                                  color="primary"
                                  v-show="k || (!k && inputsganjil.length > 1)"
                                  @click="removeGanjil(k)"
                                >
                                  <v-icon dark>
                                    mdi-close
                                  </v-icon>
                                </v-btn>

                                <v-btn
                                  class="mx-2"
                                  
                                  dark
                                  
                                  color="primary"
                                  v-show="k == inputsganjil.length - 1"
                                  @click="addGanjil(k)"
                                >
                                Add Employment
                                </v-btn>
                  </v-col>

                
                </v-row>


                <v-row>
                    <v-col cols="12" sm="6">
                      <span><h3 bold> Education History </h3> </span>
                    </v-col>
                  </v-row>
                  <v-row v-for="(inpute, k) in inputsgenap" :key="k">
                  <v-col cols="12" sm="6">
                    <v-container>
                    <v-expansion-panels>
              <v-expansion-panel>
              <v-expansion-panel-header>
            <template v-slot:default="{ open }">
          <v-row no-gutters>
            <v-col cols="4">
              <v-fade-transition leave-absolute>
                <span
                  v-if="open"
                  key="0"
                >
                  Enter Education
                </span>
                <span
                v-else
                  key="1">
                  University:
                <div><h3>{{ inpute.name }}</h3></div>
                </span>
              </v-fade-transition>
            </v-col>
            <v-col
              cols="8"
              class="text--secondary"
            >
              <v-fade-transition leave-absolute>
                <span
                  v-if="open"
                  key="0"
                >
                  Enter Year
                </span>
                <span
                  v-else
                  key="1"
                >
                 Year {{ inpute.year }}
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-text-field
          v-model="inpute.name"
          placeholder="Type Data"
        ></v-text-field>
        <v-text-field
          v-model="inpute.year"
          placeholder="Type Data"
        ></v-text-field>

       
      </v-expansion-panel-content>
    </v-expansion-panel>
                    </v-expansion-panels>
                    </v-container>

                     <v-btn
                                  class="mx-2"
                                  
                                  dark
                                  small
                                  color="primary"
                                  v-show="k || (!k && inputsgenap.length > 1)"
                                  @click="removeGenap(k)"
                                >
                                  <v-icon dark>
                                    mdi-close
                                  </v-icon>
                                </v-btn>

                                <v-btn
                                  class="mx-2"
                                  
                                  dark
                                  
                                  color="primary"
                                  v-show="k == inputsgenap.length - 1"
                                  @click="addGenap(k)"
                                >
                                  Add Education
                                </v-btn>
                  </v-col>

                </v-row>


             <v-row>
                    <v-col cols="12" sm="6">
                      <span><h3 bold> Skills </h3> </span>
                    </v-col>
                  </v-row>
            <v-row>
              <v-col>
                <v-card>
    <v-container fluid>
      <v-row
        align="center"
      >
        <v-col
          cols="12"
          sm="6"
        >
          <v-select
            v-model="value"
            :items="items"
            attach
            chips
            label="Skills"
            multiple
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  </v-col>
  </v-row>
            

                </div>
              </v-form>
              
  </div>
</template>

<script>
// @ is an alias to /src
async function uploadImage(file) {
  const url = await myApi.upload(file);
  return url;
}

export default {
  name: 'Home',
  components: {
    
  },


  data() {
      
        
        return {
          

        rules: [
        v => !!v ||  'File Harus Di isi',
        v => !v || v.size <= 1000000 || 'Data Tidak Boleh Lebih Dari 1 MB!',
        v => !v || v.type == 'image/jpeg'||v.type == 'image/png' || v.type == 'image/bmp' || 'Data Harus .jpeg'
        
        
      ],
      

      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],

      pasanganRulesIsSendiri: [
        v => !!v ||  'Data Harus Di isi',
        v => v && v <=6000000 || 'Tidak Boleh Lebih Dari Rp 6.000.000',
        v => v && v.length >= 7 || 'Maks 6.000.000',
        v => v && v.length < 8 || 'Maks 6.000.000'
      ],

      pasanganRulesIsPasangan:[
        v => !!v ||  'Data Harus Di isi',
        v => v && v <=8000000 || 'Tidak Boleh Lebih Dari Rp 8.000.000',
        
      ],

        numberRules: [
          v => Number.isInteger(v) || 'Numbers Only Input',
          v => v >= 0 || 'The value must be greater than zero',
          
  ],  

          formData: {
        month: [],
        day: []
      },

      items: ['Vuejs', 'Java', 'C#', 'C++','Angular','JavaScript'],

      value: [
      ],

      selected: [],

            status:"",
            // nikDecode:"",

            nikData:"",
            nomorktp:"",
            nama_kary:"",
            nik:"",
            phoneNumber:"",
            nik_atasan:"",
            nikAtasanApproval1:"",
            nikAtasanApproval2:"",
            nama_atasan:"",
            phoneNumber_atasan:"",
            Atasan:"",
            email:"",
            email_atasan:"",
            PT:"",
            idunit:"",
            Cabang:"",
            idcabang:"",
            Jabatan:"",
            Tanggal_Lahir:"",
            jobClass:"",
            Tanggal_diangkatTetap:"",
            statusKerja:"",
            statusNikah:"",
            Departemen:"",
            alamatKtp:"",
            alamatDomisili:"",
            tunjanganKaryawan:"",
            tunjanganPasangan:"", 
            dataPengajuan:"",   
            approval1:"",
            approval2:"",
            approval3:"",
            
            lamaKPR:"",
            birthDate:"",
            tetapDate:"",

            
            loading:false,
            vloading:false,
            // valid: true,

            atasanApproval1:[
              {
                data: "Indonesia"
              },
              {
                data: "Thailand"
              },{
                data: "Singapore"
              },{
                data: "Malaysia"
              },{
                data: "Australia"
              },
            ],
            atasanApproval2:[
              {
                data: "Jakarta"
              },
              {
                data: "Bangkok"
              },{
                data: "Singapore"
              },{
                data: "Kuala Lumpur"
              },{
                data: "Victoria"
              },
            ],
            atasanApproval3:[],

            inputsganjil:[
              {
                name: "",
                year: ""
              }
            ],
            inputsgenap:[
              {
                name: "",
                year: ""
              }
            ],
            suratPernyatanString:"",
            slipGajiKaryawan:[],
            gajiKaryawanString:"",
            slipGajiPasangan:[],
            gajiPasanganString:"",


            itemJawab: [
          {
          id: "1",
          name: "Diri Sendiri"
          },
          {
          id: "2",
          name: "Dengan Pasangan"
          }
          ],
      
          bulanKPR:['60','120', '180', '240']



        }
    },

    computed: {
      allSelected () {
        return this.selected.length === this.items.length
      },
      selections () {
        const selections = []

        for (const selection of this.selected) {
          selections.push(selection)
        }

        return selections
      },
    },

    methods: {
            isNumber(n) {
  let char = String.fromCharCode(n.keyCode); // Get the character
  if(/^[0-9]+$/.test(char)) return true; // Match with regex 
  else n.preventDefault(); // If not match, don't add to input text
},

      assignCity(){
        if (this.atasanApproval1 == "Indonesia") {
          this.atasanApproval2 == "Jakarta"
          
        } else if (this.atasanApproval1 == "Thailand") {
          this.atasanApproval2 == "Bangkok"
        }  else if (this.atasanApproval1 == "Singapore") {
          this.atasanApproval2 == "Singapore"
        }else if (this.atasanApproval1 == "Malaysia") {
          this.atasanApproval2 == "Kuala Lumpur"
        }else if (this.atasanApproval1 == "Australia") {
          this.atasanApproval2 == "Victoria"
        }
      },

      addGanjil() {
      this.inputsganjil.push({
        name: "",
        year: "",
      });
    },

     addGenap() {
      this.inputsgenap.push({
        name: "",
        year: "",
      });
      // // console.log(this.inputs);
    },

    removeGanjil(index) {
      this.inputsganjil.splice(index, 1);
    },

    removeGenap(index) {
      this.inputsgenap.splice(index, 1);
    },

      Preview_image(e)
    {
        console.log(e);
        if (e.target.files && e.target.files[0])
        {
          
        }
    }
          },

}
</script>
