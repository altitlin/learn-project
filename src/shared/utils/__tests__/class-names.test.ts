import { classNames } from 'shared/utils/class-names'

describe('shared.lib.class-names', () => {
	test('should return classname', () => {
		const testClassName = 'qwerty'

		expect(classNames(testClassName)).toBe(testClassName)
	})

	test('should return classname with mods', () => {
		const testMods = {
			mod1: true,
			mod2: false,
			mod3: undefined,
			mod4: null,
		} as unknown as Parameters<typeof classNames>[1]
		const testClassName = 'qwerty'
		const expectedClassNames = `${testClassName} mod1`

		expect(classNames(testClassName, testMods)).toBe(expectedClassNames)
	})

	test('should return className with additional classNames', () => {
		const testAdditional = 'class1 class2'
		const testClassName = 'qwerty'
		const expectedClassNames = `${testClassName} ${testAdditional}`

		expect(classNames(testClassName, {}, testAdditional.split(' '))).toBe(expectedClassNames)
	})

	test('should return className with mods and additional classNames', () => {
		const testMods = {
			mod1: true,
			mod2: false,
		}
		const testAdditional = 'class1 class2'
		const testClassName = 'qwerty'
		const expectedClassNames = `${testClassName} ${testAdditional} mod1`

		expect(classNames(testClassName, testMods, testAdditional.split(' '))).toBe(expectedClassNames)
	})
})
