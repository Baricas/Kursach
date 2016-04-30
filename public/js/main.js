$(function() {

    $('#lib_select').on('change', function() {
        var libId = $(this).val();
        $.ajax({
            url: 'http://localhost:8008/library/repositories/',
            type: 'POST',
            data: {
                id: libId
            },
            success: function(data) {
                var target = $('#rep_select');
                target.empty();
                var reps = data.reps;
                $('#repository').css('display', 'inline-block');
                reps.forEach(function(rep) {
                    target.append(
                        '<option value="'+ rep.id +'">'+ rep.name +'</option>'
                    );
                });
            }
        });
    });

});
