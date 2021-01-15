goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.Uri', 'goog.object', 'goog.math.Integer', 'goog.string.StringBuffer', 'goog.array', 'goog.math.Long']);
goog.addDependency("../process/env.js", ['process.env'], ['cljs.core']);
goog.addDependency("../devtools/version.js", ['devtools.version'], ['cljs.core']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer']);
goog.addDependency("../cljs/pprint.js", ['cljs.pprint'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer', 'clojure.string']);
goog.addDependency("../devtools/context.js", ['devtools.context'], ['cljs.core']);
goog.addDependency("../clojure/set.js", ['clojure.set'], ['cljs.core']);
goog.addDependency("../clojure/data.js", ['clojure.data'], ['cljs.core', 'clojure.set']);
goog.addDependency("../devtools/defaults.js", ['devtools.defaults'], ['cljs.core']);
goog.addDependency("../devtools/prefs.js", ['devtools.prefs'], ['cljs.core', 'devtools.defaults']);
goog.addDependency("../devtools/util.js", ['devtools.util'], ['cljs.core', 'devtools.version', 'goog.userAgent', 'cljs.pprint', 'devtools.context', 'clojure.data', 'devtools.prefs']);
goog.addDependency("../devtools/protocols.js", ['devtools.protocols'], ['cljs.core']);
goog.addDependency("../devtools/format.js", ['devtools.format'], ['cljs.core', 'devtools.context']);
goog.addDependency("../devtools/munging.js", ['devtools.munging'], ['cljs.core', 'goog.object', 'goog.string.StringBuffer', 'devtools.context', 'clojure.string']);
goog.addDependency("../devtools/formatters/helpers.js", ['devtools.formatters.helpers'], ['cljs.core', 'devtools.protocols', 'devtools.format', 'devtools.prefs', 'devtools.munging']);
goog.addDependency("../devtools/formatters/state.js", ['devtools.formatters.state'], ['cljs.core']);
goog.addDependency("../clojure/walk.js", ['clojure.walk'], ['cljs.core']);
goog.addDependency("../devtools/formatters/templating.js", ['devtools.formatters.templating'], ['devtools.formatters.helpers', 'devtools.formatters.state', 'devtools.util', 'cljs.core', 'devtools.protocols', 'clojure.string', 'clojure.walk']);
goog.addDependency("../devtools/formatters/printing.js", ['devtools.formatters.printing'], ['devtools.formatters.helpers', 'devtools.formatters.state', 'cljs.core', 'devtools.protocols', 'devtools.format', 'devtools.prefs']);
goog.addDependency("../devtools/formatters/markup.js", ['devtools.formatters.markup'], ['devtools.formatters.helpers', 'devtools.formatters.printing', 'devtools.formatters.templating', 'devtools.formatters.state', 'cljs.core', 'devtools.munging']);
goog.addDependency("../cljs/stacktrace.js", ['cljs.stacktrace'], ['goog.string', 'cljs.core', 'clojure.string']);
goog.addDependency("../devtools/toolbox.js", ['devtools.toolbox'], ['devtools.formatters.markup', 'devtools.formatters.templating', 'cljs.core', 'devtools.protocols']);
goog.addDependency("../devtools/async.js", ['devtools.async'], ['cljs.core', 'goog.labs.userAgent.browser', 'devtools.context', 'goog.async.nextTick']);
goog.addDependency("../devtools/reporter.js", ['devtools.reporter'], ['devtools.util', 'cljs.core', 'devtools.context']);
goog.addDependency("../devtools/formatters/budgeting.js", ['devtools.formatters.budgeting'], ['devtools.formatters.helpers', 'devtools.formatters.markup', 'devtools.formatters.templating', 'devtools.formatters.state', 'cljs.core']);
goog.addDependency("../devtools/formatters/core.js", ['devtools.formatters.core'], ['devtools.formatters.helpers', 'devtools.formatters.markup', 'devtools.formatters.templating', 'devtools.formatters.state', 'cljs.core', 'devtools.reporter', 'devtools.protocols', 'devtools.formatters.budgeting', 'devtools.format', 'devtools.prefs']);
goog.addDependency("../devtools/formatters.js", ['devtools.formatters'], ['devtools.formatters.core', 'devtools.util', 'cljs.core', 'goog.labs.userAgent.browser', 'devtools.context', 'devtools.prefs']);
goog.addDependency("../devtools/hints.js", ['devtools.hints'], ['cljs.stacktrace', 'cljs.core', 'devtools.context', 'devtools.prefs']);
goog.addDependency("../devtools/core.js", ['devtools.core'], ['devtools.toolbox', 'devtools.util', 'cljs.core', 'devtools.async', 'devtools.formatters', 'devtools.hints', 'devtools.context', 'devtools.defaults', 'devtools.prefs']);
goog.addDependency("../devtools/preload.js", ['devtools.preload'], ['cljs.core', 'devtools.core', 'devtools.prefs']);
goog.addDependency("../fugue/notes.js", ['fugue.notes'], ['cljs.core']);
goog.addDependency("../clojure/zip.js", ['clojure.zip'], ['cljs.core']);
goog.addDependency("../loom/alg_generic.js", ['loom.alg_generic'], ['cljs.core']);
goog.addDependency("../loom/graph.js", ['loom.graph'], ['cljs.core', 'loom.alg_generic']);
goog.addDependency("../loom/attr.js", ['loom.attr'], ['cljs.core', 'loom.graph']);
goog.addDependency("../cljs/core/async/impl/protocols.js", ['cljs.core.async.impl.protocols'], ['cljs.core']);
goog.addDependency("../cljs/core/async/impl/ioc_helpers.js", ['cljs.core.async.impl.ioc_helpers'], ['cljs.core', 'cljs.core.async.impl.protocols']);
goog.addDependency("../cljs/core/async/impl/buffers.js", ['cljs.core.async.impl.buffers'], ['cljs.core', 'cljs.core.async.impl.protocols']);
goog.addDependency("../cljs/core/async/impl/dispatch.js", ['cljs.core.async.impl.dispatch'], ['cljs.core', 'cljs.core.async.impl.buffers', 'goog.async.nextTick']);
goog.addDependency("../cljs/core/async/impl/channels.js", ['cljs.core.async.impl.channels'], ['cljs.core.async.impl.dispatch', 'cljs.core', 'cljs.core.async.impl.buffers', 'cljs.core.async.impl.protocols']);
goog.addDependency("../cljs/core/async/impl/timers.js", ['cljs.core.async.impl.timers'], ['cljs.core.async.impl.channels', 'cljs.core.async.impl.dispatch', 'cljs.core', 'cljs.core.async.impl.protocols']);
goog.addDependency("../cljs/core/async.js", ['cljs.core.async'], ['cljs.core.async.impl.channels', 'cljs.core.async.impl.dispatch', 'cljs.core', 'cljs.core.async.impl.buffers', 'cljs.core.async.impl.protocols', 'cljs.core.async.impl.ioc_helpers', 'goog.array', 'cljs.core.async.impl.timers']);
goog.addDependency("../cljs/spec/gen/alpha.js", ['cljs.spec.gen.alpha'], ['goog.Uri', 'cljs.core']);
goog.addDependency("../cljs/spec/alpha.js", ['cljs.spec.alpha'], ['cljs.core', 'goog.object', 'clojure.string', 'clojure.walk', 'cljs.spec.gen.alpha']);
goog.addDependency("../fugue/synthdef.js", ['fugue.synthdef'], ['cljs.core', 'loom.graph', 'loom.attr', 'cljs.spec.alpha']);
goog.addDependency("../fugue/chan.js", ['fugue.chan'], ['cljs.core', 'cljs.core.async', 'fugue.synthdef', 'cljs.spec.alpha']);
goog.addDependency("../cljs/tools/reader/impl/utils.js", ['cljs.tools.reader.impl.utils'], ['goog.string', 'cljs.core', 'clojure.string']);
goog.addDependency("../cljs/tools/reader/reader_types.js", ['cljs.tools.reader.reader_types'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer', 'cljs.tools.reader.impl.utils']);
goog.addDependency("../cljs/tools/reader/impl/inspect.js", ['cljs.tools.reader.impl.inspect'], ['cljs.core']);
goog.addDependency("../cljs/tools/reader/impl/errors.js", ['cljs.tools.reader.impl.errors'], ['cljs.core', 'cljs.tools.reader.reader_types', 'cljs.tools.reader.impl.inspect', 'clojure.string']);
goog.addDependency("../oops/config.js", ['oops.config'], ['cljs.core']);
goog.addDependency("../oops/helpers.js", ['oops.helpers'], ['cljs.core']);
goog.addDependency("../oops/state.js", ['oops.state'], ['oops.config', 'oops.helpers', 'cljs.core']);
goog.addDependency("../oops/schema.js", ['oops.schema'], ['cljs.core']);
goog.addDependency("../oops/messages.js", ['oops.messages'], ['cljs.core']);
goog.addDependency("../oops/sdefs.js", ['oops.sdefs'], ['cljs.core', 'cljs.spec.alpha']);
goog.addDependency("../oops/core.js", ['oops.core'], ['oops.config', 'oops.state', 'oops.helpers', 'cljs.core', 'oops.schema', 'goog.object', 'oops.messages', 'oops.sdefs', 'cljs.spec.alpha']);
goog.addDependency("../fugue/audio.js", ['fugue.audio'], ['cljs.core', 'oops.core', 'fugue.synthdef', 'cljs.spec.alpha']);
goog.addDependency("../fugue/buffer.js", ['fugue.buffer'], ['cljs.core', 'cljs.spec.alpha']);
goog.addDependency("../fugue/ramp.js", ['fugue.ramp'], ['fugue.audio', 'cljs.core', 'cljs.core.async', 'fugue.chan', 'oops.core', 'fugue.synthdef', 'cljs.spec.alpha']);
goog.addDependency("../fugue/sampler.js", ['fugue.sampler'], ['fugue.audio', 'fugue.buffer', 'fugue.ramp', 'cljs.core', 'cljs.core.async', 'fugue.chan', 'oops.core', 'fugue.synthdef', 'cljs.spec.alpha']);
goog.addDependency("../live/api.js", ['live.api'], ['cljs.core']);
goog.addDependency("../fugue/demo/midi_monitor.js", ['fugue.demo.midi_monitor'], ['cljs.core', 'live.api']);
goog.addDependency("../reagent/debug.js", ['reagent.debug'], ['cljs.core']);
goog.addDependency("../cljs/source_map/base64.js", ['cljs.source_map.base64'], ['cljs.core']);
goog.addDependency("../cljs/source_map/base64_vlq.js", ['cljs.source_map.base64_vlq'], ['cljs.source_map.base64', 'cljs.core', 'goog.string.StringBuffer', 'clojure.string']);
goog.addDependency("../fugue/components.js", ['fugue.components'], ['cljs.core']);
goog.addDependency("../fugue/convolver.js", ['fugue.convolver'], ['fugue.audio', 'fugue.buffer', 'cljs.core', 'oops.core', 'fugue.synthdef', 'cljs.spec.alpha']);
goog.addDependency("../reagent/impl/util.js", ['reagent.impl.util'], ['cljs.core', 'clojure.string']);
goog.addDependency("../reagent/impl/batching.js", ['reagent.impl.batching'], ['reagent.impl.util', 'cljs.core', 'reagent.debug']);
goog.addDependency("../reagent/ratom.js", ['reagent.ratom'], ['reagent.impl.util', 'cljs.core', 'goog.object', 'reagent.impl.batching', 'clojure.set', 'reagent.debug']);
goog.addDependency("../cljsjs/react/development/react.inc.js", ['react', 'cljsjs.react'], [], {'foreign-lib': true});
goog.addDependency("../reagent/impl/component.js", ['reagent.impl.component'], ['reagent.impl.util', 'reagent.ratom', 'react', 'cljs.core', 'goog.object', 'reagent.impl.batching', 'reagent.debug']);
goog.addDependency("../reagent/impl/template.js", ['reagent.impl.template'], ['reagent.impl.util', 'reagent.ratom', 'react', 'cljs.core', 'goog.object', 'reagent.impl.batching', 'reagent.impl.component', 'reagent.debug', 'clojure.string', 'clojure.walk']);
goog.addDependency("../cljsjs/react-dom/development/react-dom.inc.js", ['react_dom', 'cljsjs.react.dom'], ['react'], {'foreign-lib': true});
goog.addDependency("../reagent/dom.js", ['reagent.dom'], ['reagent.impl.util', 'reagent.ratom', 'cljs.core', 'reagent.impl.template', 'reagent.impl.batching', 'react_dom']);
goog.addDependency("../reagent/core.js", ['reagent.core'], ['reagent.impl.util', 'reagent.ratom', 'react', 'cljs.core', 'reagent.impl.template', 'reagent.impl.batching', 'reagent.impl.component', 'reagent.debug', 'reagent.dom']);
goog.addDependency("../fugue/sequencer.js", ['fugue.sequencer'], ['cljs.core', 'fugue.chan', 'fugue.synthdef', 'cljs.spec.alpha']);
goog.addDependency("../fugue/feedback.js", ['fugue.feedback'], ['fugue.audio', 'cljs.core', 'loom.graph', 'loom.attr', 'fugue.synthdef', 'cljs.spec.alpha']);
goog.addDependency("../fugue/midi.js", ['fugue.midi'], ['cljs.core', 'cljs.core.async', 'fugue.chan', 'oops.core', 'fugue.synthdef', 'cljs.spec.alpha']);
goog.addDependency("../fugue/keyboard.js", ['fugue.keyboard'], ['cljs.core', 'cljs.core.async', 'fugue.chan', 'fugue.synthdef', 'fugue.midi', 'cljs.spec.alpha']);
goog.addDependency("../fugue/midi_input.js", ['fugue.midi_input'], ['fugue.components', 'goog.string', 'reagent.core', 'cljs.core', 'cljs.core.async', 'goog.string.format', 'fugue.keyboard', 'fugue.midi']);
goog.addDependency("../fugue/ctx_ctrls.js", ['fugue.ctx_ctrls'], ['fugue.audio', 'fugue.buffer', 'reagent.core', 'cljs.core', 'cljs.core.async', 'fugue.midi']);
goog.addDependency("../fugue/metronome.js", ['fugue.metronome'], ['fugue.audio', 'cljs.core', 'cljs.core.async', 'fugue.chan', 'oops.core', 'fugue.synthdef', 'cljs.spec.alpha']);
goog.addDependency("../cljs/repl.js", ['cljs.repl'], ['goog.string', 'cljs.core', 'goog.string.format', 'cljs.spec.alpha']);
goog.addDependency("../fugue/envelope.js", ['fugue.envelope'], ['fugue.audio', 'fugue.ramp', 'cljs.core', 'fugue.chan', 'oops.core', 'fugue.synthdef', 'cljs.spec.alpha']);
goog.addDependency("../fugue/api.js", ['fugue.api'], ['fugue.audio', 'fugue.buffer', 'fugue.components', 'fugue.convolver', 'goog.string', 'reagent.core', 'fugue.sequencer', 'cljs.core', 'fugue.feedback', 'cljs.core.async', 'fugue.midi_input', 'fugue.ctx_ctrls', 'fugue.synthdef', 'fugue.keyboard', 'fugue.sampler', 'fugue.metronome', 'fugue.midi', 'cljs.repl', 'clojure.string', 'fugue.envelope']);
goog.addDependency("../cljs/tools/reader/impl/commons.js", ['cljs.tools.reader.impl.commons'], ['cljs.tools.reader.impl.errors', 'cljs.core', 'cljs.tools.reader.reader_types', 'cljs.tools.reader.impl.utils']);
goog.addDependency("../cljs/tools/reader.js", ['cljs.tools.reader'], ['cljs.tools.reader.impl.commons', 'goog.string', 'cljs.tools.reader.impl.errors', 'cljs.core', 'cljs.tools.reader.reader_types', 'goog.string.StringBuffer', 'cljs.tools.reader.impl.utils', 'goog.array']);
goog.addDependency("../cljs/env.js", ['cljs.env'], ['cljs.core']);
goog.addDependency("../cljs/tools/reader/edn.js", ['cljs.tools.reader.edn'], ['cljs.tools.reader.impl.commons', 'cljs.tools.reader', 'goog.string', 'cljs.tools.reader.impl.errors', 'cljs.core', 'cljs.tools.reader.reader_types', 'goog.string.StringBuffer', 'cljs.tools.reader.impl.utils']);
goog.addDependency("../cljs/reader.js", ['cljs.reader'], ['cljs.tools.reader.edn', 'cljs.tools.reader', 'cljs.core', 'goog.object', 'goog.string.StringBuffer']);
goog.addDependency("../cljs/tagged_literals.js", ['cljs.tagged_literals'], ['cljs.core', 'cljs.reader']);
goog.addDependency("../cljs/analyzer.js", ['cljs.analyzer'], ['cljs.tools.reader', 'goog.string', 'cljs.core', 'cljs.tools.reader.reader_types', 'cljs.env', 'clojure.set', 'cljs.tagged_literals', 'clojure.string', 'cljs.reader']);
goog.addDependency("../cljs/source_map.js", ['cljs.source_map'], ['cljs.source_map.base64_vlq', 'cljs.core', 'goog.object', 'clojure.set', 'clojure.string']);
goog.addDependency("../cljs/compiler.js", ['cljs.compiler'], ['cljs.tools.reader', 'goog.string', 'cljs.core', 'cljs.env', 'goog.string.StringBuffer', 'clojure.set', 'cljs.analyzer', 'cljs.source_map', 'clojure.string']);
goog.addDependency("../cljs/core$macros.js", ['cljs.core$macros'], ['cljs.compiler', 'cljs.core', 'cljs.env', 'clojure.set', 'cljs.analyzer', 'clojure.string', 'clojure.walk']);
goog.addDependency("../cljs/js.js", ['cljs.js'], ['cljs.compiler', 'cljs.tools.reader', 'cljs.core', 'goog.crypt.base64', 'cljs.tools.reader.reader_types', 'cljs.env', 'goog.string.StringBuffer', 'cljs.tagged_literals', 'cljs.analyzer', 'cljs.source_map', 'clojure.string', 'cljs.spec.alpha', 'clojure.walk', 'cljs.core$macros']);
goog.addDependency("../fugue/bootstrap.js", ['fugue.bootstrap'], ['fugue.api', 'cljs.js', 'cljs.core']);
goog.addDependency("../fugue/demo/cantor.js", ['fugue.demo.cantor'], ['cljs.core', 'live.api']);
goog.addDependency("../fugue/boxes/editor.js", ['fugue.boxes.editor'], ['reagent.core', 'cljs.core', 'oops.core', 'cljs.pprint', 'cljs.repl', 'clojure.string', 'reagent.dom']);
goog.addDependency("../fugue/demo/demo_loader.js", ['fugue.demo.demo_loader'], ['cljs.core']);
goog.addDependency("../fugue/boxes/layout.js", ['fugue.boxes.layout'], ['clojure.zip', 'cljs.core']);
goog.addDependency("../fugue/ide.js", ['fugue.ide'], ['reagent.core', 'cljs.core', 'fugue.boxes.editor', 'fugue.demo.demo_loader']);
goog.addDependency("../fugue/boxes/state.js", ['fugue.boxes.state'], ['cljs.core', 'fugue.boxes.layout']);
goog.addDependency("../fugue/boxes/ui.js", ['fugue.boxes.ui'], ['reagent.core', 'cljs.js', 'fugue.boxes.state', 'cljs.core', 'fugue.boxes.layout', 'fugue.boxes.editor']);
goog.addDependency("../fugue/web.js", ['fugue.web'], ['fugue.boxes.ui', 'reagent.core', 'fugue.ide', 'cljs.core', 'fugue.bootstrap', 'reagent.dom']);
goog.addDependency("../fugue/demo/cof.js", ['fugue.demo.cof'], ['cljs.core', 'live.api']);
