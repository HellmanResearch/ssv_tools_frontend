function myDelete() {
    var cmdhnd = myDiagram.commandHandler;
    var delFlag = false;
    cmdhnd.canDeleteSelection = function () {
        //var r = confirm("是否删除当前所选节点？此操作会导致基础数据信息同步删除!");
        //新建对象保存货架和库区
        var shelfs = [];
        var stocks = [];
        //遍历所选中的节点
        var goAjax = false;
        for (var it = myDiagram.selection.iterator; it.next();) {
            var part = it.value;  // part is now a Node or a Group or a Link or maybe a simple Part
            if (part instanceof go.Node && (part.data.category === "shelf")) {
                var id = part.data.id;
                if(id!==undefined){
                    shelfs.push(id);
                    goAjax = true;
                }
            }
            if (part instanceof go.Node && (part.data.category === "stock")) {
                var id = part.data.id;
                if(id!==undefined){
                    stocks.push(id);
                    goAjax = true;
                }
            }
        }
        if(goAjax){
            var r = confirm("是否删除当前所选节点？此操作会导致基础数据信息同步删除!");
            if(r){
                return true;
                /*var parems = {shelf: shelfs.join(","), stock: stocks.join(",")};
                //进行动态ajax判断是否可删除
                $.ajax({
                    type: "post",
                    url: ctxPath + "/tbifm07/deleteShelfAndStockAction11111",
                    data: parems,
                    dataType: "json",
                    async: false,
                    beforeSend: function () {
                        waitW.show();
                    },
                    complete: function () {
                        waitW.close();
                    },
                    success: function (data) {
                        if (data.flag === 1) {
                            if (data.result === "1") {
                                return true;
                            }
                            else {
                                GysAlert({
                                    content: data.message
                                });
                                return false;
                            }
                        }
                        else {
                            GysAlert({
                                content: data.message
                            });
                            return false;
                        }
                    },
                    error: function (e) {
                        alertConsole(e);
                        return false;
                    }
                });*/
            }
            else{
                return false;
            }
        }
        else{
            return true;
        }
    };

}