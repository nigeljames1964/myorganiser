<template>
<div>
  <router-link to="/"><i class="fas fa-home"></i></router-link>
  <h1 class="page-header">Appointments</h1>
  <div><button id="newBtn" @click="add = !add"><i class="fas fa-plus"></i></button></div>

  <div id="createNewAppointment" v-if="add === true">
    <h5 class="new-heading">Enter new appointment details</h5>
    <form action="" class="form-group col-md-12">
      <label for="name">Name for appointment</label>
      <input type="text" name="name" class="form-control mb-2" v-model="appointment.name">
      <label for="app_date">Appointment Date</label>
      <input type="date" name="app_date" class="form-control mb-2" v-model="appointment.date">
      <label for="app_time">Appointment Time (optional)</label>
      <input type="time" name="app_time" class="form-control mb-2" v-model="appointment.time">
      <textarea type="text" class="form-control mb-2"  placeholder="description (optional)"  v-model="appointment.description"></textarea>
      <div id="btn-div" class="col-sm-12">
        <button class="btn btn-primary col-sm-6 mt-2" @click.prevent="save_appointment">Save</button>
        <button class="btn btn-cancel col-sm-6 mt-2" @click.prevent="cancel_add_appointment">Cancel</button>
      </div>
    </form>
  </div>

  <div class="appointment-list">
    <ul>
      <li v-for="(appointment, index) in this.$store.getters.getAppointments" :key="appointment.name">
        <div class="appointment-listitem">
          <h4>{{ appointment.name }}</h4>
          <h5>{{ appointmnet.date }}</h5>
          <h5>{{ appointment.time }}</h5>
          <h5>Status:</h5> {{ appointmant.status }}
          <button @click="remove_appointment(index)">X</button>
        </div>
      </li>
    </ul>
  </div>

</div>
</template>

<script>
export default {
  name: "appointments",
  data() {
    return {
      add: false,
      appointment: {
        name: "",
        description: "",
        date: "",
        time: ""
      }
    };
  },
  methods: {
    show_add() {
      console.log("adding appointment");
      this.add = true;
    },
    save_appointment() {
      console.log("saving appointment");
      if (this.appointment.name != "" && this.appointment.date != "") {
        this.$store.commit("addAppointment", this.appointment);
        this.$router.push("/appointments");
      }
    },
    cancel_add_appointment() {
      this.$router.push("/");
    },
    remove_appointment(i) {}
  },
  beforeMount() {
    if (!this.$store.getters.getLoggedStatus) {
      this.router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
fa-plus {
  color: red;
  font-size: 3rem;
  margin-left: 300px;
}

#createNewAppointment {
  display: flex;
  flex-flow: column;
  align-items: center;
}

#newBtn {
  display: block;
  margin-left: auto;
  margin-right: 10px;
}

.form-group {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.btn-div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  .btn {
  }
}

.appointment-listitem {
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-bottom: 15px;
  background-color: grey;
  color: white;
}
</style>

