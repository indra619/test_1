<template>
  <div class="home">
    <v-form class="pa-4" >
                <div class="my-2">
                  <v-row>
                    <v-col cols="12" sm="6">
                      <span><h3 bold> Input Pengajuan </h3> </span>
                    </v-col>
                  </v-row>

                  <v-row >
                    <v-col cols="12" sm="6">
                      <div>

                        <span> NIK :  <v-text-field v-model="nik"
                        solo
                        >
                        </v-text-field>
                        </span>

                      </div>
                    </v-col>
                  

                  
                    <v-col cols="12" sm="6">

                      <span> Nama Karyawan: <v-text-field v-model="nama_kary"
                        solo
                        >
                        </v-text-field>
                      </span>

                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" sm="6">

                      <span> Email:<v-text-field v-model="statusKerja"
                        solo
                        :rules="emailRules"
                        >
                        </v-text-field>
                      </span>

                      
                    </v-col>
                  
                    <v-col cols="12" sm="6">

                      <span> Tanggal Lahir: <v-text-field v-model="Tanggal_Lahir"
                        solo
                        >
                        </v-text-field>
                      </span>

                      
                    </v-col>
                  </v-row>

                  <v-row>

                    <v-col cols="12" sm="6">
                      <div>

                        <span> Tanggal Tetap: <v-text-field v-model="Tanggal_diangkatTetap"
                        solo
                        >
                        </v-text-field>
                      </span>

                      </div>
                    </v-col>

                    <v-col cols="12" sm="6">

                      <span> Unit: <v-text-field v-model="PT"
                        solo
                        >
                        </v-text-field>
                      </span>

                
              </v-col>

              <v-col cols="12" sm="6" >

                <span> Departement: <v-text-field v-model="Departemen"
                        solo
                        >
                        </v-text-field>
                      </span>

                

              </v-col>

              <v-col cols="12" sm="6">

                <span> Cabang: <v-text-field v-model="Cabang"
                        solo
                        >
                        </v-text-field>
                      </span>
                      
                    </v-col>

                    <v-col cols="12" sm="6">

                <span> Jabatan: <v-text-field v-model="Jabatan"
                        solo
                        >
                        </v-text-field>
                      </span>
                      
                    </v-col>

                    <v-col cols="12" sm="6">

                <span> Job Class: <v-text-field v-model="jobClass"
                        solo
                        >
                        </v-text-field>
                      </span>
                      
                    </v-col>

                    <v-col cols="12" sm="6">

                      <span> Alamat KTP:<v-textarea v-model="alamatKtp"
                      auto-grow
                      
                      solo
                        >
                        </v-textarea>
                      </span>
                      
                    </v-col>

                    <v-col cols="12" sm="6">

                    <span> Alamat Domisili: <v-textarea v-model="alamatDomisili"
                    auto-grow
                    
                    solo
                        >
                        </v-textarea>
                      </span>
                      
                    </v-col>

                    <v-col cols="12" sm="6">

                <span> No. HP: <v-text-field v-model="phoneNumber"
                        solo
                        >
                        </v-text-field>
                      </span>
                    </v-col>
                    

                    <v-col cols="12" sm="6">
                    <v-card-text>
                      <h2
                        class="subtitle-1 font-weight-regular text-justify"
                      >Pengajuan KPR</h2>

                      <v-radio-group v-model="dataPengajuan" row
                      :disabled="this.status == 'Failed' || this.nik_atasan == null && this.nama_atasan == null">
                        <!-- <v-radio
                          v-for="item in itemJawab"
                          :key="item.id"
                          :label="`${item.name}`"
                          :value="item.id"
                        ></v-radio> -->
                        <v-radio
                        label="Diri Sendiri"
                        value="1"
                        >

                        </v-radio>
                        <v-radio
                        label="Dengan Pasangan"
                        value="2"
                        :disabled="this.statusNikah =='Belum Menikah' || this.statusNikah =='Janda/Duda' ||this.statusNikah == 'Duda/Janda' ">

                        </v-radio>
                      </v-radio-group>
                    </v-card-text>

                    <h5 class="red--text">*Untuk Status Belum Menikah Maksimal Penghasilan 6 Juta</h5> <br>
                    <h5 class="red--text"> Untuk Status Menikah Maksimal Penghasilan 8 Juta</h5>
                    

                    </v-col>
                    
                    <v-col cols="12" sm="6"  v-show="dataPengajuan != ''">

                    <span v-show="dataPengajuan != ''"> Input Jumlah Penghasilan Karyawan (Gaji yang diterima melalui transfer +i.saku) : <v-text-field v-model="tunjanganKaryawan"
                        
                        :rules="dataPengajuan == '1' &&['Belum Menikah','Duda/Janda','Janda/Duda'].includes(statusNikah)  ? pasanganRulesIsSendiri : pasanganRulesIsPasangan"
                        v-on:keypress="isNumber($event)"
                        label="Rp."
                        v-show="dataPengajuan != '' "> 
                        </v-text-field>
                      </span>
                      
                    </v-col>

                    <v-col cols="12" sm="6" v-show="dataPengajuan == '2'">

                    <span  v-show="dataPengajuan == '2'"> Input Jumlah Penghasilan Pasangan (Gaji + Tunjangan) : <v-text-field v-model="tunjanganPasangan"
                        
                        :rules="pasanganRulesIsPasangan"
                        v-on:keypress="isNumber($event)"
                        v-show="dataPengajuan == '2'"
                        label="Rp.">
                        </v-text-field>
                      </span>
                      
                    </v-col>

                    <v-col cols="12" sm="6">
                      <span>Jangka Waktu KPR(Bulan)</span>
                      <v-select
                      v-model="lamaKPR"
                      :items="bulanKPR"
                      :disabled="this.status == 'Failed' || this.nik_atasan == null && this.nama_atasan == null"
                      dense
                      outlined
                    ></v-select>

                    <h5 class="red--text">*
                    1. File Upload Tidak boleh Lebih dari 1 MB dan Berformat Gambar (JPEG,JPG,PNG)!</h5><br/>
                    <h5 class="red--text">
                    2. Slip Penghasilan Berupa Printscreen / Screenshoot yang berasal dari Slip Penghasilan yang diberikan payroll!</h5><br/>
                    <h5 class="red--text">
                    3. Mohon Pastikan Gambar Terlihat Jelas dan Tidak Corrupt!</h5>

                      </v-col>

                    <v-col cols="12" sm="6">
                      <v-btn 
                      :href="this.$baseurl + `kpr/getSuratPernyataanKPR?nik=${nik}&namaktp=${nama_kary}&nomorktp=${nomorktp}&alamatktp=${alamatKtp}`" download>
                        Download Surat Pernyataan
                      </v-btn>
                    </v-col>

                    <v-col cols="12" sm="6">

                      <h5 class="red--text">* Untuk Scan Document / Foto Mohon Menggunakan Applikasi CAMSCANNER! (Download Applikasi Di Playstore)</h5>

                  <v-file-input
                  v-model="suratPernyataan"
                  :rules="rules"
                  :disabled="dataPengajuan == ''"
                  ref="fileInput"
                  show-size
                  counter
                  accept="image/jpeg, image/png, image/jpg"
                  label="Upload Surat Pernyataan" 
                ></v-file-input>

                <h5 class="red--text">* File Upload Surat Pernyataan Belum Memiliki Rumah Berformat Gambar (JPEG,JPG,PNG)!</h5>

                    </v-col>

                    <v-col cols="12" sm="6" v-show="dataPengajuan != ''">

                  <v-file-input
                  v-show="dataPengajuan != ''"
                  :rules="rules"
                  :disabled="dataPengajuan == ''"
                  show-size
                  counter
                  
                  v-model="slipGajiKaryawan"
                  accept="image/jpeg, image/png, image/jpg"
                  label="Upload Slip Gaji Karyawan" 
                ></v-file-input>

                <h5 class="red--text">* File Upload Slip Penghasilan Karyawan Berformat Gambar (JPEG,JPG,PNG)!</h5>

                    </v-col>

                    <v-col cols="12" sm="6" v-show="dataPengajuan == '2'">

                  <v-file-input
                  v-show="dataPengajuan == '2'"
                  :rules="rules"
                  :disabled="dataPengajuan == ''"
                  show-size
                  counter
                  
                  v-model="slipGajiPasangan"
                  accept= "image/jpeg, image/png, image/jpg"
                  label="Upload Slip Gaji Pasangan" 
                ></v-file-input>

                 <h5 class="red--text">* File Upload Slip Penghasilan Pasangan Berformat Gambar (JPEG,JPG,PNG)!</h5>
                 
                    </v-col>

                <v-col cols="12" sm="6">

                          <span> Atasan ESS: <v-text-field v-model="Atasan"
                        solo
                        >
                        </v-text-field>
                      </span>
                              
                              </v-col>

                  <v-col cols="12" sm="6">
                    <span>Atasan Aproval 1</span>
                      <v-autocomplete
                      v-model="approval1"
                      :items="atasanApproval1"
                      item-text="APPROVAL1"
                      item-value="APPROVAL1"
                      dense
                      label="Silahkan Pilih Atasan"
                      :disabled="this.status == 'Failed'|| this.nik_atasan == null && this.nama_atasan == null"
                      outlined
                      @change="getAtasanApproval2Data"
                    ></v-autocomplete>
                      </v-col>

                      <v-col cols="12" sm="6">
                        <span>Atasan Aproval 2</span>
                      <v-autocomplete
                      v-model="approval2"
                      :items="atasanApproval2"
                      item-text="APPROVAL2"
                      item-value="APPROVAL2"
                      label="Silahkan Pilih Atasan"
                      dense
                      :disabled="this.status == 'Failed'||this.nik_atasan == null && this.nama_atasan == null"
                      outlined
                      @change="getAtasanApproval3Data"
                    ></v-autocomplete>
                      </v-col>

                      <v-col cols="12" sm="6" v-show="validateAtasan3">
                        <span v-show="validateAtasan3">Atasan Aproval 3</span>
                      <v-autocomplete
                      v-model="approval3"
                      :items="atasanApproval3"
                      item-text="APPROVAL3"
                      item-value="APPROVAL3"
                      dense
                      label="Silahkan Pilih Atasan"
                      :disabled="this.status == 'Failed'&& this.validateAtasan3 || this.nik_atasan == null && this.nama_atasan == null"
                      v-show="validateAtasan3"
                      outlined
                    ></v-autocomplete>
                      </v-col>

                </v-row>
    

          <v-row justify="center">
            <v-col cols="12" sm="6">
          <v-btn @click="submitDataKPRData" color="primary"
          
          block
          :loading="loading"
          :disabled="this.status == 'Failed' || this.nik_atasan == null && this.nama_atasan == null"
          v-show="validateInput && validateInputPasangan && validateInputAtasan"
            >Submit</v-btn>
          </v-col>
            </v-row>
            

                </div>
              </v-form>
              
  </div>
</template>

<script>
// @ is an alias to /src

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

            atasanApproval1:[],
            atasanApproval2:[],
            atasanApproval3:[],

            suratPernyataan:[],
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

}
</script>
