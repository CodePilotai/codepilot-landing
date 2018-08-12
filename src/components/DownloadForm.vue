<template lang="html">
  <Modal :is-open="isOpen" @close="$emit('close')">
    <div id="mauticform_wrapper_acceptlicense" class="mauticform_wrapper text-black">
      <h4 class="header text-3xl pt-0">
        Download CodePilot.ai
      </h4>
      <p class="paragraph">
        Before you download CodePilot, please enter your email address and accept our policy statements.
      </p>
      <label class="title mb-1 inline-block" for="mauticform_input_acceptlicense_email">
        Email
      </label>
      <form autocomplete="false" role="form" method="post" action="https://test.mautic.codepilot.ai/form/submit?formId=7" id="mauticform_acceptlicense"  data-mautic-form="acceptlicense" enctype="multipart/form-data">
        <div class="mauticform-error" id="mauticform_acceptlicense_error"></div>
        <div class="mauticform-message" id="mauticform_acceptlicense_message"></div>
        <div class="mauticform-innerform">
          <div class="mauticform-page-wrapper mauticform-page-1" data-mautic-form-page="1">
            <div id="mauticform_acceptlicense_email"  data-validate="email" data-validation-type="email" class="mauticform-row mauticform-email mauticform-field-1 mauticform-required">
              <input
                id="mauticform_input_acceptlicense_email"
                name="mauticform[email]"
                value=""
                placeholder="Email"
                class="w-full mauticform-input rounded py-2 px-3 text-black border"
                type="email"
                required
              />
              <span class="mauticform-errormsg" style="display: none;">This is required.</span>
            </div>
            <div id="mauticform_acceptlicense_accept_license"  data-validate="accept_license" data-validation-type="checkboxgrp" class="mauticform-row mauticform-checkboxgrp mauticform-field-2 mauticform-required">
              <div class="mauticform-checkboxgrp-row">
                <label
                  id="mauticform_checkboxgrp_label_accept_license_Agree0"
                  for="mauticform_checkboxgrp_checkbox_accept_license_Agree0"
                  class="mauticform-checkboxgrp-label my-4 block"
                >
                  <input
                    class="mauticform-checkboxgrp-checkbox"
                    name="mauticform[accept_license][]" id="mauticform_checkboxgrp_checkbox_accept_license_Agree0"
                    type="checkbox"
                    value="Agree"
                    required
                  />
                  <span class="pl-2">
                    I agree to the <a class="link text-black capitalize m-0 p-0" href="https://codepilot.ai/privacy/" target="_blank">End User License Agreement</a>
                  </span>
                </label>
              </div>
              <span class="mauticform-errormsg" style="display: none;">You must accept the License</span>
            </div>

            <div id="mauticform_acceptlicense_submit"  class="mauticform-row mauticform-button-wrapper mauticform-field-3">
              <button
                type="submit"
                id="mauticform_input_acceptlicense_submit"
                name="mauticform[submit]"
                value="1"
                class="button button-primary mauticform-button ml-0 mb-0"
              >
                Download
              </button>
            </div>
          </div>
        </div>
        <input type="hidden" name="mauticform[formId]" id="mauticform_acceptlicense_id" value="7"/>
        <input type="hidden" name="mauticform[return]" id="mauticform_acceptlicense_return" value=""/>
        <input type="hidden" name="mauticform[formName]" id="mauticform_acceptlicense_name" value="acceptlicense"/>
      </form>
    </div>
  </Modal>
</template>

<script>
import Modal from './Modal'

export default {
  components: { Modal },
  props: {
    isOpen: Boolean
  }
}
</script>

<style lang="sass">
</style>
