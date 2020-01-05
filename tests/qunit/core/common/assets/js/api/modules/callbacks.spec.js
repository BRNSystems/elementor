import Base from 'elementor-api/api/hooks/base';
import HookBase from 'elementor-api/modules/hook-base';

jQuery( () => {
	QUnit.module( 'File: core/common/assets/js/api/api/hooks/base.js', () => {
		QUnit.module( 'Callbacks', () => {
			QUnit.test( 'checkId()', ( assert ) => {
				const random = Math.random(),
					fakeCallbacks = class extends Base {
						getType() {
							return 'hook';
						}
					},
					fakeCallback = class extends HookBase {
						getType() {
							return 'hook';
						}

						getId() {
							return random.toString();
						}

						getCommand() {
							return 'test/command';
						}

						register() {}
					},
					callbacks = new fakeCallbacks(),
					callableBase = new fakeCallback();

				assert.throws(
					() => {
						callbacks.register( 'after', callableBase );
						callbacks.register( 'after', callableBase );
					},
					new Error( `id: '${ random.toString() }' is already in use.` )
				);
			} );
		} );
	} );
} );
