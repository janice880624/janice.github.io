// from block definition js

Blockly.Blocks['line'] = {
    init: function() {
      this.appendValueInput("channelId")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("channelId:");
      this.appendValueInput("channelSecret")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("channelSecret:");
      this.appendValueInput("Token")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Token:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(165);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};