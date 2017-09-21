$(function() {
  //开启 IScroll 移动端有 bug ，预留后期解决
  // var IScroll = $.AMUI.iScroll;
  // var myScroll = new IScroll('#wrapper', {
  //   click: true
  // });

  $('#doc-vld-msg').validator({
    onValid: function(validity) {
      $(validity.field).closest('.am-form-group').find('.am-alert').hide();
    },

    onInValid: function(validity) {
      var $field = $(validity.field);
      var $group = $field.closest('.am-form-group');
      var $alert = $group.find('.am-alert');
      // 使用自定义的提示信息 或 插件内置的提示信息
      var msg = $field.data('validationMessage') || this.getValidationMessage(validity);

      if (!$alert.length) {
        $alert = $('<div class="am-alert am-alert-danger"></div>').hide().
          appendTo($group);
      }

      $alert.html(msg).show();
    },

    submit: function(form){
      var mask = this.isFormValid();
      if(mask){
        //验证通过
        $('#my-confirm').modal({
          relatedTarget: this,
          onConfirm: function(options) {
            var formJson= {
              wangdian: $("#wangdian").val(),
              name: $("#name").val(),
              gonghao: $("#gonghao").val(),
            }
            console.log(formJson);


            // 这里写 ajax 接口数据
            /*
                $.get(....)
             */
          },
          onCancel: function() {

          }
        });
      }
      return false;
    }
  });
});
