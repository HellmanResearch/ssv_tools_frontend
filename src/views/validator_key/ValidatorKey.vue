<template>
    <div style="display: flex; justify-content: center">
      <h1>Updating</h1>
    </div>
</template>

<script>
    import Axios from "axios"
    import {Message} from 'element-ui';

    import WAValidator from 'wallet-address-validator';


    export default {
        data() {
            return {
                itemData: {},
                downloading: false,
                inNew: false,
                copyContent: "Click to copy",
                copyIcon: "el-icon-document-copy",
                walletAddress: "",
                walletAddressError: "",
                hexDataLabel: "Hex Data",
                hexDataContent: ""
            }
        },
        mounted() {
        },
        methods: {
            newKey() {
                this.resetHexData()
                this.inNew = true
                this.itemData = {}
                this.$c_master.post("ssv/deposit-key/new").then(response => {
                    this.inNew = false
                    this.itemData = response.data
                    this.hexDataContent = this.itemData.hex
                    this.download()
                }).catch(error => {
                    this.inNew = false
                })
            },
            download() {
                this.downloading = true
                const url = `${this.$c_master.defaults.baseURL}ssv/deposit-key/download?dir_name=${this.itemData.dir_name}`
                // window.open(url);
                this.downloading = false
                const label = this.itemData.dir_name + ".zip";
                console.log("label: ", label)
                this.downloadItem(url, label)
            },
            async onCopyHex() {
                this.copyIcon = "el-icon-loading"
                const result = await this.copyTextToClipboard(this.hexDataContent);
                if (result == true) {
                    this.copyContent = "Copied"
                } else {
                    this.copyContent = "Error"
                }
                this.copyIcon = "el-icon-document-copy"
            },
            fallbackCopyTextToClipboard(text) {
                var textArea = document.createElement("textarea");
                textArea.value = text;

                // Avoid scrolling to bottom
                textArea.style.top = "0";
                textArea.style.left = "0";
                textArea.style.position = "fixed";

                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();

                try {
                    var successful = document.execCommand('copy');
                    return true;
                } catch (err) {
                    console.error('Fallback: Oops, unable to copy', err);
                    return false
                }
            },
            async copyTextToClipboard(text) {
                if (!navigator.clipboard) {
                    return this.fallbackCopyTextToClipboard(text);
                }
                try {
                    await navigator.clipboard.writeText(text)
                    console.log('Async: Copying to clipboard was successful!');
                    return true
                } catch (err) {
                    console.error('Async: Could not copy text: ', err);
                    return false
                }
                // navigator.clipboard.writeText(text).then(function () {
                //     console.log('Async: Copying to clipboard was successful!');
                //     return true;
                // }, function (err) {
                //     console.error('Async: Could not copy text: ', err);
                //     return false;
                // });
            },
            downloadItem(url, label) {
                Axios.get(url, {responseType: 'blob'})
                    .then(response => {
                        const blob = new Blob([response.data], {type: 'application/zip'})
                        const link = document.createElement('a')
                        link.href = URL.createObjectURL(blob)
                        link.download = label
                        link.click()
                        URL.revokeObjectURL(link.href)
                    }).catch((error) => {
                    console.log("download error: ", error)
                    Message.error("Download error")
                })
            },
            onGenerateFullCommand() {
                this.walletAddressError = ""
                var valid = WAValidator.validate(this.walletAddress, "ETH");
                if (!valid) {
                    this.walletAddressError = "Invalid wallet address"
                    return
                }
                const fullCommand = `+goerlieth ${this.walletAddress} ${this.itemData.hex}`
                this.hexDataToFullCommand(fullCommand)
            },
            hexDataToFullCommand(fullCommand) {
                this.hexDataLabel = "Full Command:"
                this.hexDataContent = fullCommand
            },
            resetHexData() {
                this.hexDataLabel = "Hex Data:"
                this.hexDataContent = ""
            }
        }
    }
</script>
