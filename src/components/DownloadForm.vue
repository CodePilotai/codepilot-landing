<template lang="html">
  <Modal>
    <div id="mauticform_wrapper_acceptlicense" class="mauticform_wrapper">
      <form autocomplete="false" role="form" method="post" action="https://test.mautic.codepilot.ai/form/submit?formId=7" id="mauticform_acceptlicense"  data-mautic-form="acceptlicense" enctype="multipart/form-data">
        <div class="mauticform-error" id="mauticform_acceptlicense_error"></div>
        <div class="mauticform-message" id="mauticform_acceptlicense_message"></div>
        <div class="mauticform-innerform">
          <div class="mauticform-page-wrapper mauticform-page-1" data-mautic-form-page="1">
            <div id="mauticform_acceptlicense_email"  data-validate="email" data-validation-type="email" class="mauticform-row mauticform-email mauticform-field-1 mauticform-required">
                <input id="mauticform_input_acceptlicense_email" name="mauticform[email]" value="" placeholder="Email" class="mauticform-input" type="email" />
                <span class="mauticform-errormsg" style="display: none;">This is required.</span>
            </div>
            <div id="mauticform_acceptlicense_accept_license"  data-validate="accept_license" data-validation-type="checkboxgrp" class="mauticform-row mauticform-checkboxgrp mauticform-field-2 mauticform-required">
              <div class="mauticform-checkboxgrp-row">
                <label id="mauticform_checkboxgrp_label_accept_license_Agree0" for="mauticform_checkboxgrp_checkbox_accept_license_Agree0"  class="mauticform-checkboxgrp-label">
                  <input  class="mauticform-checkboxgrp-checkbox" name="mauticform[accept_license][]" id="mauticform_checkboxgrp_checkbox_accept_license_Agree0" type="checkbox" value="Agree" />
                    I agree to the End User License Agreement
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
                class="button mauticform-button"
              >
                Submit
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
  components: { Modal }
}
</script>

<style lang="sass">
</style>
