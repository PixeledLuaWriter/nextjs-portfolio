import type { Variants } from "motion/react"

const defaultModalVariants: Variants = {
	initial: {
		scale: 0,
	},
	animated: {
		scale: 1,
		transition: {
			duration: 0.5,
			ease: "easeInOut"
		}
	},
	exit: {
		scale: 0,
		transition: {
			duration: 0.5,
			ease: "easeInOut"
		}
	}
}

const defaultBackdropVariants: Variants = {
	initial: {
		opacity: 0,
		backdropFilter: "blur(0%)",
	},
	animated: {
		opacity: 1,
		backdropFilter: "blur(50%)",
		transition: {
			ease: "easeInOut",
			duration: 0.5
		},
	},
	exit: {
		opacity: 0,
		backdropFilter: "blur(0%)",
		transition: {
			ease: "easeInOut",
			duration: 0.5
		}
	}
}

export { defaultModalVariants, defaultBackdropVariants }
