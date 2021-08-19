box_5 = {
    q_jewels: 25,
    c_jewels: 5,
    c_amulets: 35,
    c_total: 841
}

window.onload = initiate()

function initiate() {
    resetTable()
    calculateChance()
}

function resetTable() {
    active = document.getElementsByClassName("nav-link active")[0].innerHTML
    if (active == 1) {
        box = {
            q_jewels: 5,
            c_jewels: 5,
            c_amulets: 20,
            c_total: 430
        }
    } else if (active == 2) {
        box = {
            q_jewels: 10,
            c_jewels: 10,
            c_amulets: 25,
            c_total: 552
        }
    } else if (active == 3) {
        box = {
            q_jewels: 15,
            c_jewels: 15,
            c_amulets: 30,
            c_total: 689
        }
    } else if (active == 4) {
        box = {
            q_jewels: 25,
            c_jewels: 20,
            c_amulets: 35,
            c_total: 806
        }
    }
    document.getElementById("q-jewels").innerHTML = box.q_jewels
    document.getElementById("c-jewels").innerHTML = box.c_jewels
    document.getElementById("c-amulets").innerHTML = box.c_amulets
    document.getElementById("c-total").innerHTML = box.c_total
    document.getElementById("r-jewels").innerHTML = box.c_jewels
    document.getElementById("r-amulets").innerHTML = box.c_amulets
    document.getElementById("r-total").innerHTML = box.c_total
}

function calculateChance() {

    // Amulet Value (1 Amulet = X Jewels)
    amulet_value = 0
    if (document.getElementById("amulet_value_checkbox").checked) {
        amulet_value = 1500 / 45.605
        if (document.getElementById("fes_rates_checkbox").checked) {
            amulet_value = 1500 / 57.63
        }
    }

    // Count
    c_jewels = document.getElementById("c-jewels").innerHTML
    c_amulets = document.getElementById("c-amulets").innerHTML

    // Remaining
    r_jewels = document.getElementById("r-jewels").innerHTML
    r_amulets = document.getElementById("r-amulets").innerHTML
    r_total = document.getElementById("r-total").innerHTML

    // %
    pc_jewels = r_jewels / r_total
    pc_amulets = r_amulets / r_total

    // Value
    v_jewels = box.q_jewels * pc_jewels;
    v_amulets = amulet_value * pc_amulets

    // Box 5
    f_pc_jewels = box_5.c_jewels / box_5.c_total
    f_pc_amulets = box_5.c_amulets / box_5.c_total
    f_v_jewels = f_pc_jewels * box_5.q_jewels
    f_v_amulets = f_pc_amulets * amulet_value

    // Display
    document.getElementById("%-jewels").innerHTML = (pc_jewels * 100).toFixed(2)
    document.getElementById("%-amulets").innerHTML = (pc_amulets * 100).toFixed(2)
    document.getElementById("%-total").innerHTML = ((pc_jewels + pc_amulets) * 100).toFixed(2)
    document.getElementById("v-jewels").innerHTML = v_jewels.toFixed(4)
    document.getElementById("v-amulets").innerHTML = v_amulets.toFixed(4)
    document.getElementById("v-total").innerHTML = (v_jewels + v_amulets).toFixed(4)
    document.getElementById("f-v-jewels").innerHTML = f_v_jewels.toFixed(4)
    document.getElementById("f-v-amulets").innerHTML = f_v_amulets.toFixed(4)
    document.getElementById("f-v-total").innerHTML = (f_v_jewels + f_v_amulets).toFixed(4)

    // Highlight Box Reset
    if ((v_jewels + v_amulets) < (f_v_jewels + f_v_amulets)) {
        document.getElementById("reset-button").className = "btn btn-success"
    } else {
        document.getElementById("reset-button").className = "btn btn-danger"
    }
}

function changeBox(select) {
    // Should always be 1 element matching
    active = document.getElementsByClassName("nav-link active")[0]
    if (active !== select) {
        active.className = "nav-link"
        select.className = "nav-link active"
        initiate()
    }
}

function selectText(cell) {
    document.getSelection().setBaseAndExtent(cell, 0, cell, 1);
}
