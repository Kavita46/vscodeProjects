console.log("引入了login")

import('../css/login.css')
import('../css/main.scss')

import $ from ('./jquery-3.6.0.min.js')
    $(function () {
        $('btn').click(function () {
            $.get('http://localhost:3333/students/getStudents', function (res) {
                console.log(res.result);
            })
        })
    })

